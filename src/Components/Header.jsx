import React from 'react'

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

import { FaLaptopCode } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='text-light   m-2'>
          <FaLaptopCode  className='text-light fs-1 mx-2' />
            Project Fair
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
