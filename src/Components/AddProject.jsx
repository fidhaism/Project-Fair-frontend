import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState,useEffect } from 'react';
import { addProjectAPI } from '../../Services/allAPIs';

const AddProject = () => {
  
  const [preview, setPreview] = useState("")
  const [filestatus, setFileStatus] = useState(false)
  const [projectData, setProjectData] = useState({
    title:"",
    language:"",
    github:"",
    livelink:"",
    overview:"",
    projectImage:""
  })
  console.log(projectData);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  useEffect(()=>{
    //console.log(projectData.projectImage.type);
    if(projectData.projectImage.type=='image/png' || projectData.projectImage.type=="image/jpeg" || projectData.projectImage.type=="image/jpg"){
      console.log("Generate image url:")
      // File to URL Conversion
      console.log(URL.createObjectURL(projectData.projectImage));
      setPreview(URL.createObjectURL(projectData.projectImage));
      setFileStatus(false)
  }
  else{
    setFileStatus(true)
    console.log("Please insert an image with extensions(png, jpeg, jpg) only...");
  }
    },[projectData.projectImage]);
  

    //add project button
    const handleAddProject = async () => {
      const [token,setToken] = setToken();
      //data passing through state
      const { title, language, github, livelink, overview, projectImage } = projectData
  
      if (!title || !language || !github || !livelink || !overview || !projectImage) {
        alert("Please fill the following fields")
      }
      else {
        
        const reqBody = new FormData()
        reqBody.append("title", title)
        reqBody.append("language", language)
        reqBody.append("github", github)
        reqBody.append("livelink", livelink)
        reqBody.append("overview", overview)
        reqBody.append("projectImage", projectImage)
        
        
        if (token) {
          const reqHeader = {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${token}`
          }
          //api call
          const result = await addProjectAPI(reqBody, reqHeader)
          console.log(result);
          if (result.status == 200) {
            alert("Project added successfully");
            handleClose()
            setProjectData({title:'',
            language:'',
            github:'',
            livelink:'',
            overview:'',
            projectImage:'',
            userId:'',
          })
          }
          else {
            alert(result.response.data)
          }
        }
      }
  
    }

  return (
    <div>
      <button className='btn btn-light text-dark m-5' onClick={handleShow}> Add</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-6 mt- p-5'>
              <label >
                <input onChange={e=>setProjectData({...projectData,projectImage:e.target.files[0]})}  type="file" style={{display:'none'}} />
                <img width={'300px'}  src={preview?preview:"https://source.unsplash.com/random/100*100"} alt="image not found" />
              </label>
              {
                filestatus && <p className='text-danger m-2'> **Please insert an image with extensions(png,jpeg,jpg) only..</p>
              }
            </div>
            <div className='col-6 text-center'>
              <input onChange={e=>setProjectData({...projectData,title:e.target.value})}   className='form-control mb-3' type="text" placeholder='Project Title' />
              <input onChange={e=>setProjectData({...projectData,language:e.target.value})} className='form-control mb-3' type="text" placeholder='Language Used' />
              <input onChange={e=>setProjectData({...projectData,github:e.target.value})} className='form-control mb-3' type="text" placeholder='Github Link' />
              <input onChange={e=>setProjectData({...projectData,livelink:e.target.value})} className='form-control mb-3' type="text" placeholder='Live Link' />
              <input onChange={e=>setProjectData({...projectData,overview:e.target.value})} className='form-control mb-3' type="text" placeholder='Overview'/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary">ADD</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject
