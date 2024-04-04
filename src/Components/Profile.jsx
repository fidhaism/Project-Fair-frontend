import React from 'react'
import Swal from 'sweetalert2'

const Profile = () => {

  const updateUser = () => {
    Swal.fire({
      title: 'Success!',
      text: 'User Details updated',
      icon: 'success',
      confirmButtonText: 'Back'
    })
  }
  return (
    <div>
      <div className='text-center'>
        <h4 className='mt-5'>My Profile</h4>
        <label>
          <input type="file" style={{ display: 'none' }} />
          <img src="https://png.pngtree.com/png-clipart/20230824/original/pngtree-add-file-to-folder-picture-image_8348283.png" width={'200px'} alt="image not found" />
        </label>
        <div className='mx-5 px-5'>
          <input type="text" placeholder="Name" className='form-control mb-2' />
          <input type="text" placeholder='Github' className='form-control mb-2' />
          <input type="text" placeholder="Live Link" id="" className='form-control mb-2' />
          <button className='btn btn-dark m-' onClick={updateUser}> Update</button>
        </div>
      </div>
    </div>
  )
}

export default Profile
