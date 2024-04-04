import React from 'react'
import { Link } from 'react-router-dom'

const Auth = ({ register }) => {
  return (
    <div>
      <div className='row'>
        <div className="col-lg-6">
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-4489776-3757211.png?f=webp" alt="image not found" width={'100%'} className='p-4' />
        </div>
        <div className="col-lg-6 ">
          <form className='shadow bg-black '>
            <h3 className='text-center mt-5'>Project Fair</h3>
            <h5 className='text-center text-white'> Use your credentials.
              {
                register ? 'Register here...' : 'Login here...'  //conditional rendering with ternary operator used 
              }
            </h5>
            <div className='mx-5 px-5 mt-3'>
              {
                register &&
                <input className='form-control mb-2' type="text" name="username" placeholder="Username" />
              }
              <input className='form-control mb-2' type="text" name="email" placeholder="Email Address" />
              <input className='form-control mb-2' type="text" name="password" placeholder="Password" />
            </div>


            <div>
              {
                register ?
                  <div>
                    <button className='btn btn-primary w-80 mt-4'>Register</button>
                    <p>Already registered? <Link to={'/login'}>Login here...</Link></p>
                  </div>
                  :
                  <div>
                    <button className='btn btn-primary w-80 mt-4'>Login</button>
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
