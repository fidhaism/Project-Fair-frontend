import React, { useEffect, useState } from 'react'
 
import MyProject from '../Components/MyProject';
import Profile from '../Components/Profile'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [username, setUsername] = useState("")
  
  useEffect(()=>{
    if(sessionStorage.getItem("username")){
      setUsername(sessionStorage.getItem("username")) 
    }
    else{
      setUsername("") // if user is not logged in then set username to empty string 

    }
  })

  return (
    <div>
      <div className="row">
        <h4 className='text-center mt-3'>Welcome <span className='text-Light'>User</span></h4>
        <div className="col-lg-6">
          <MyProject />
        </div>
        <div className='col-lg-6'>
          <Profile />
        </div>
      </div>

    <div className='text-center m-5'>
      <Link to={'./projects'}>
      <button className='btn btn-dark'>View all Users Project</button>
      </Link>
    </div>
    </div>
  )
}

export default Dashboard
