import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProjectAPI } from '../../Services/allAPIs';
import Swal from 'sweetalert2';

const AddProject = () => {
  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState('');
  const [fileStatus, setFileStatus] = useState(false);
  const [projectData, setProjectData] = useState({
    title: '',
    language: '',
    github: '',
    livelink: '',
    overview: '',
    projectImage: null,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddProject = async () => {
    const { title, language, github, livelink, overview, projectImage } = projectData;

    if (!title || !language || !github || !livelink || !overview || !projectImage) {
      Swal.fire('Please fill all fields');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('language', language);
    formData.append('github', github);
    formData.append('livelink', livelink);
    formData.append('overview', overview);
    formData.append('projectImage', projectImage);

    // Check for token before making API call
    if (!sessionStorage.getItem('token')) {
      Swal.fire('Error', 'You need to be logged in to add a project', 'error');
      return;
    }

    const reqHeader = {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    };

    try {
      const result = await addProjectAPI(formData, reqHeader);

      if (result.error) {
        Swal.fire('Error', result.error.message, 'error');
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Project added successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        // Clear project data after successful submission (optional)
        setProjectData({
          title: '',
          language: '',
          github: '',
          livelink: '',
          overview: '',
          projectImage: null,
        });
        // Close modal after successful submission
        handleClose();
      }
    } catch (error) {
      console.error('Error adding project:', error);
      Swal.fire('Error', 'An error occurred while adding the project', 'error');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProjectData({ ...projectData, projectImage: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <Button className="btn btn-light text-dark m-5" onClick={handleShow}>
        Add
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6 mt-3 p-5 text-center">
              <label htmlFor="imageUpload" className="mb-3">
                Upload Project Image
                <input
                  id="imageUpload"
                  onChange={handleImageChange}
                  type="file"
                  className="form-control-file mt-2"
                  style={{ display: 'none' }}
                />
              </label>
              {preview && <img src={preview} alt="Project Preview" className="img-fluid" />}
              {fileStatus && <p className="text-danger mt-2">Please insert an image with extensions (png, jpeg, jpg) only.</p>}
            </div>
            <div className="col-6 text-center">
              <input onChange={(e) => setProjectData({ ...projectData, title: e.target.value })} className="form-control mb-3" type="text" placeholder="Project Title" />
              <input onChange={(e) => setProjectData({ ...projectData, language: e.target.value })} className="form-control mb-3" type="text" placeholder="Language Used" />
              <input onChange={(e) => setProjectData({ ...projectData, github: e.target.value })} className="form-control mb-3" type="text" placeholder="Github Link" />
              <input onChange={(e) => setProjectData({ ...projectData, livelink: e.target.value })} className="form-control mb-3" type="text" placeholder="Live Link" />
              <input onChange={(e) => setProjectData({ ...projectData, overview: e.target.value })} className="form-control mb-3" type="text" placeholder="Overview" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddProject} variant="primary">
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddProject;
