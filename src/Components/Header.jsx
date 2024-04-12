import React, { useState, useEffect } from 'react'

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

import { FaLaptopCode } from "react-icons/fa";

const Header = () => {

  const [token,setToken]= useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(true)
    }
    else{
      setToken(false)

    }
  },[token])
  return (
    <div>
      {
        token ? 
      
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='text-light   m-2'>
          <FaLaptopCode  className='text-light fs-1 mx-2' />
            Project Fair
          </MDBNavbarBrand>
          <h3 className='text-light'>Logout</h3>
        </MDBContainer>
      </MDBNavbar>
      :
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='text-light   m-2'>
          <FaLaptopCode  className='text-light fs-1 mx-2' />
            Project Fair
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
}
    </div>
  )
}

export default Header
