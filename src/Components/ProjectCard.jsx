import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

const ProjectCard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Card style={{ width: '28rem' }} onClick={handleShow}>
        <Card.Img variant="top" src="https://source.unsplash.com/random/400*300" alt='image not found' width={'100'} height={'300px'} />
        <Card.Body>
          <Card.Title className='text-center'>Project Title</Card.Title>

        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className='row'>
            <div className='col-6'>
              <img src="https://source.unsplash.com/random/100*100" width={'250'} height={'250px'} alt="" />
            </div>
            <div className='col-6 text-center'>
              <h4>Project Title</h4>
              <p><b>Description of the project:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Odit, laborum. Lorem ipsum dolor sit amet. </p>
              <br />
              <p> <b>Technology used:</b> ReactJS, Node</p>
              <div className='d-flex justify-content-evenly'>
                <Button className='me-5' variant="secondary"><a href=""><FaGithub /></a></Button>
                <Button className='me-5' variant="secondary"><a href=""><FaLink /></a></Button>
                <Button className='' variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </div>

            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>


        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProjectCard
