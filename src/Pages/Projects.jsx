import React from 'react'
import ProjectCard from '../Components/ProjectCard'

const Projects = () => {
  return (
    <div>
      <h2 className='text-center m-5' style={{color:'White'}} > All Projects</h2>
      <input type="text" placeholder='Search projects...' className='form-control mx-auto m-5' style={{width:'400px', marginLeft:'600px'}} />
        <div className='row'>
            <div className='col'>
              <ProjectCard/>
            </div>
        </div>
    </div>
  )
}

export default Projects
