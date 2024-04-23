import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginAPI, registerAPI } from '../../Services/allAPIs';
import Swal from 'sweetalert2';

const Auth = ({ register }) => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!userData.username || !userData.email || !userData.password) {
      Swal.fire({
        title: 'Warning!',
        text: 'Please fill in all the details!',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    } else {
      try {
        const result = await registerAPI(userData);
        if (result.status === 200) {
          Swal.fire({
            title: 'Success!',
            text: 'User successfully registered!',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(() => {
            setUserData({ ...userData, username: '', email: '', password: '' }); // Clear input fields after successful registration
            navigate('/login');
          });
        } else if (result.response && result.response.status === 406) {
          Swal.fire({
            title: 'Error!',
            text: result.response.data,
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      } catch (error) {
        console.error('Error registering user:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Attempting login...');
    if (!userData.email || !userData.password) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all the details!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    } else {
      try {
        const result = await loginAPI(userData);
        console.log('Response from loginAPI:', result);
        if (result.status === 200) {
          sessionStorage.setItem('username', result.data.existingUser.username);
          sessionStorage.setItem('token', result.data.token);
          console.log('Login successful!');
          console.log('Navigating to dashboard...');
          navigate('/dashboard'); // Navigate to the dashboard upon successful login
        } else if (result.response && result.response.status === 404) {
          Swal.fire({
            title: 'Error!',
            text: result.response.data,
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      } catch (error) {
        console.error('Error logging in:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  };
  
  

  return (
    <div className="row">
      <div className="col-lg-6">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-4489776-3757211.png?f=webp" alt="Login illustration" width="100%" className="p-4" />
      </div>
      <div className="col-lg-6">
        <form className="shadow bg-black p-5">
          <h3 className="text-center" style={{ color: 'limegreen' }}>Project Fair</h3>
          <h5 className="text-center text-white">{register ? 'Register' : 'Login'}</h5>
          {register && (
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Username"
              value={userData.username}
              onChange={(e) => setUserData({ ...userData, username: e.target.value })}
            />
          )}
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Email Address"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
          <input
            type="password"
            className="form-control mb-2"
            placeholder="Password"
            value={userData.password}
            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
          />
          <div className="text-center">
            {register ? (
              <>
                <button className="btn btn-primary w-80 mt-4" onClick={handleRegister}>Register</button>
                <p>Already registered? <Link to="/login">Login here...</Link></p>
              </>
            ) : (
              <>
                <button className="btn btn-primary w-80 mt-4" onClick={handleLogin}>Login</button>
                <p>New member? <Link to="/register">Sign up now...</Link></p>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
