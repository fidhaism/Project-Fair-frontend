import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const AddProject = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button className='btn btn-light text-dark m-5' onClick={handleShow}> Add</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-6 mt- p-5'>
              <label >
                <input type="file" style={{display:'none'}} />
                <img width={'300px'}src="https://source.unsplash.com/random/100*100" alt="image not found" />
              </label>
            </div>
            <div className='col-6 text-center'>
              <input className='form-control mb-3' type="text" placeholder='Project Title' />
              <input className='form-control mb-3' type="text" placeholder='Language Used' />
              <input  className='form-control mb-3' type="text" placeholder='Github Link' />
              <input  className='form-control mb-3' type="text" placeholder='Live Link' />
              <input className='form-control mb-3' type="text" placeholder='Overview'/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary">ADD</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject
