import React from 'react'
import AddProject from '../Components/AddProject';  
import MyProject from '../Components/MyProject';
import Profile from '../Components/Profile'

const Dashboard = () => {
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

    </div>
  )
}

export default Dashboard
