import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../Components/ProjectCard';
import { getHomeProjectAPI } from '../../Services/allAPIs';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [homeProject, setHomeProject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getHomeProjectAPI();
        if (result.status === 200) {
          setHomeProject(result.data);
        } else {
          setError('Failed to fetch projects');
        }
      } catch (error) {
        setError('Failed to fetch projects');
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    setIsLoggedIn(!!sessionStorage.getItem('token'));
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center mb-4">
            <b>Dev Arsenal</b>: Where Design Meets Data, Unveiling Full-Stack Projects
          </h3>
          <p className="mx-3 text-justify mb-5">
            Do you have a collection of projects you'd love to share with the world? This platform provides the perfect space to build your online portfolio and showcase your creative spark. Sign up for a free account and gain access to a suite of user-friendly tools that allow you to easily manage and present your best work.
          </p>
          <div className="text-center">
            {isLoggedIn ? (
              <Link to="/dashboard">
                <button className="btn btn-dark mt-2 mb-5">Manage your Projects</button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="btn btn-dark mt-2 mb-5">Get Started</button>
              </Link>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/600x500" // Placeholder image link
            alt="Dev Arsenal"
            className="img-fluid"
            style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>
      </div>

      <div className="row mt-5">
        <h3 className="text-center mb-4">Explore Our Projects</h3>
        <div className="row">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : error ? (
            <p className="text-center">Error: {error}</p>
          ) : (
            homeProject.map(item => (
              <div key={item.id} className="col-md-4 mb-4">
                <ProjectCard project={item} />
              </div>
            ))
          )}
        </div>
      </div>

      <div className="row mt-5">
        <h3 className="text-center mb-4">Our Services</h3>
        <div className="col-md-4">
          <div className="card shadow p-4 mb-4">
            <h5 className="text-center">Web Design & Development</h5>
            <p className="text-justify">
              Looking to establish a captivating online presence? Our web services combine the best of both worlds: web design and development. Our design team crafts user-friendly interfaces and visually striking layouts that reflect your brand identity.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-4 mb-4">
            <h5 className="text-center">Single-Page Application</h5>
            <p className="text-justify">
              Imagine a website that feels as fluid and engaging as your favorite app. With SPAs, we'll build a single, dynamic web page that reacts to your users' clicks without the annoying lag of reloading.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow p-4 mb-4">
            <h5 className="text-center">Backend Development & Services</h5>
            <p className="text-justify">
              Think of us as the website whisperers, handling all the data storage, user authentication, and complex calculations that happen out of sight. With our expert backend services, you can rest assured your website will be reliable, secure, and always ready to handle whatever users throw its way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
