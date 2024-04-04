import React from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'

const Home = () => {
  return (
    <div>
      <div className='row'>
        <h3 className='text-center mt-5'><b>Dev Arsenal</b>: Where Design Meets Data, Unveiling Full-Stack Projects</h3>
        <div className='col-md-6 mt-5'>

          <p style={{ textAlign: 'justify' }} className='mx-5'>Do you have a collection of projects you'd love to share with the world? This platform provides the perfect space to build your online portfolio and showcase your creative spark. Sign up for a free account and gain access to a suite of user-friendly tools that allow you to easily manage and present your best work.
            <br />
            Imagine a central hub for all your projects, meticulously organized and readily accessible. With our intuitive interface, you can upload various project files, add detailed descriptions, and even categorize them for a streamlined presentation. This level of control empowers you to craft a narrative around your work, highlighting your skills and experience in a way that resonates
            with potential employers or clients.
            <br />
            But the benefits extend beyond aesthetics. Our platform prioritizes security, ensuring your valuable projects are safely stored within your private account.
            Whether you're a developer, designer, freelancer, or simply someone passionate about showcasing your creative endeavors, this platform provides the perfect foundation to build a compelling online presence and share your unique story with the world.
          </p>
          <div className='text-center'>
            <Link to={'/login'}>
              <button className='btn btn-dark mt-2 mb-5'>Get Started</button>
            </Link>

          </div>
        </div>
        <div className='col-md-6'>
          <img src="https://uploads.gts.az/about/620c9374943f97.45501398.webp" alt="" style={{ width: '610px', height: '500px' }} />
        </div>
      </div>
      <div>
        <div className="col-12" style={{ height: '500px' }}>
          <h3 className='text-center m-5'>Explore Our Projects</h3>
          <marquee width="100%" height="400px" direction="left">
            <div>
              <ProjectCard />
            </div>
          </marquee>
        </div>
      </div>
      <div className='row mx-5' >
        <h3 className='text-center m-5'>Our Services</h3>
        <div className="col-md-4">
          <div className='card shadow p-5'style={{height:'370px'}}>
            <h5 className='text-center m-2'>Web  Design & Development</h5>
            <p style={{textAlign:'justify'}}>Looking to establish a captivating online presence? Our web services combine the best of both worlds: web design and development. Our design team acts as the artist and architect, crafting user-friendly interfaces and visually striking layouts that reflect your brand identity.This powerful duo creates websites that are both aesthetically pleasing and high-performing, leaving a lasting impression on your visitors.</p>
          </div>
        </div>
        <div className="col-md-4">
        <div className='card shadow p-5'style={{height:'370px'}}>
            <h5 className='text-center m-2'>Single-Page Application</h5>
            <p style={{textAlign:'justify'}}>Imagine a website that feels as fluid and engaging as your favorite app. With SPAs, that's exactly what you get. We'll build a single, dynamic web page that reacts to your users' clicks without the annoying lag of reloading. This translates to lightning-fast loading times, an intuitive flow that keeps them glued to their screens, and an overall experience that feels more like an app than a website. </p>
          </div>
        </div>
        <div className="col-md-4">
        <div className='card shadow p-5'style={{height:'370px'}}>
            <h5 className='text-center m-2' >Backend Development & Services</h5>
            <p style={{textAlign:'justify'}}>Think of us as the website whisperers, handling all the data storage, user authentication, and complex calculations that happen out of sight. This frees your website to focus on what it does best – delivering an amazing user experience. With our expert backend services, you can rest assured your website will be reliable, secure, and always ready to handle whatever users throw its way.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
