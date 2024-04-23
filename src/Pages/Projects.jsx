import React, { useEffect, useState } from 'react'
import ProjectCard from '../Components/ProjectCard'
import { getUsersProjectAPI } from '../../Services/allAPIs'

const Projects = () => {
  const [allUserProjects, setAllUserProjects] = useState([])
  const [error, setError] = useState(null)

  const fetchUserProjects = async () => {
    if (sessionStorage.getItem('token')) {
      const token = sessionStorage.getItem('token')
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      }

      try {
        const result = await getUsersProjectAPI(reqHeader)
        if (result.status === 200) {
          setAllUserProjects(result.data)
        } else {
          setError(result.response.data)
        }
      } catch (error) {
        setError(error.message)
      }
    }
  }

  useEffect(() => {
    fetchUserProjects()
  }, [])

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h2 className='text-center m-5' style={{color:'White'}} > All Projects</h2>
      <input type="text" placeholder='Search projects...' className='form-control mx-auto m-5' style={{width:'400px', marginLeft:'600px'}} />
      <div className='row'>
        {allUserProjects.length > 0? allUserProjects.map(project => (
          <div className='col-md-4'>
            <ProjectCard project={project}/>
          </div>
        )) : "Can't fetch all the Projects"}
      </div>
    </div>
  )
}

export default Projects