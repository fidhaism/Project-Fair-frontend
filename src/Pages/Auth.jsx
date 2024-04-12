import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { loginAPI, registerAPI } from '../../Services/allAPIs'
import Swal from 'sweetalert2'

const Auth = ({ register }) => {
  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleRegister = async (e) => {
    e.preventDefault()
    if (!userData.username || !userData.email || !userData.password) {
      Swal.fire({
        title: 'Warning!',
        text: 'Please fill in the details!',
        icon: 'warning',
        confirmButtonText: 'Back'
      })
    } else {
      //API Call to register
      const result = await registerAPI(userData)

      if (result.status === 200) {
        Swal.fire({
          title: 'Success!',
          text: 'User Details updated',
          icon: 'successfully Registered',
          confirmButtonText: 'Back'
        })
        // To clear the form  
        setUserData({
          username: '',
          email: '',
          password: ''
        })
        // To navigate to login page
        navigate('/login')
      } else if (result.response.status == 406) {
        Swal.fire({
          title: 'Error!',
          text: result.response.data,
          icon: 'error',
          confirmButtonText: 'Back'
        })
        // To clear the form  
        setUserData({
          username: '',
          email: '',
          password: ''
        })
      }
    }
    console.log(userData)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    if (!userData.email || !userData.password) {
      Swal.fire({
        title: 'Warning!',
        text: 'Please fill in the details!',
        icon: 'warning',
        confirmButtonText: 'Back'
      })
    } else {
      //API Call to Login
      const result = await loginAPI(userData)
      console.log(result)
      if (result.status === 200) {
        sessionStorage.setItem('username', result.data.existingUser.username)
        sessionStorage.setItem('token', result.data.token)

        Swal.fire({
          title: 'Success!',
          text: 'You are now Logged In',
          icon: 'successfully Logged In',
          confirmButtonText: 'Back'
        })
        // To clear the form  
        setUserData({
          email: '',
          password: ''
        })
        //  navigate to home page
        navigate('/')
      } else if (result.response.status == 406) {
        Swal.fire({
          title: 'Error!',
          text: result.response.data,
          icon: 'error',
          confirmButtonText: 'Back'
        })
      }
    }
    console.log(userData)
  }

  return (
    <div>
      <div className='row'>
        <div className="col-lg-6">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-4489776-3757211.png?f=webp" alt="image not found" width={'100%'} className='p-4' />
        </div>
        <div className="col-lg-6 ">
          <form className='shadow bg-black '>
            <h3 className='text-center mt-5'style={{color:'limegreen'}}>Project Fair</h3>
            <h5 className='text-center text-white'> Use your credentials to <br />
              {
                register ? 'Register here...' : 'Login here...'  //conditional rendering with ternary operator used 
              }
            </h5>
            <div className='mx-5 px-5 mt-3'>
              {
                register &&
                <input onChange={e => setUserData({ ...userData, username: e.target.value })} value={userData.username} className='form-control mb-2' type="text" name="username" placeholder="Username" />
              }
              <input onChange={e => setUserData({ ...userData, email: e.target.value })} value={userData.email} className='form-control mb-2' type="text" name="email" placeholder="Email Address" />
              <input onChange={e => setUserData({ ...userData, password: e.target.value })} value={userData.password} className='form-control mb-2' type="text" name="password" placeholder="Password" />
            </div>


            <div>
              {
                register ?
                  <div>
                    <button onClick={handleRegister} className='btn btn-primary w-80 mt-4'>Register</button>
                    <p>Already registered? <Link to={'/login'}>Login here...</Link></p>
                  </div>
                  :
                  <div>
                    <button onClick={handleLogin} className='btn btn-primary w-80 mt-4'>Login</button>
                    <p> New a member? <Link to={'/register'}> Sign up now...</Link></p>
                  </div>

              }

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Auth
