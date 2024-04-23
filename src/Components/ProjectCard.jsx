import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { serverURL } from '../../Services/serverURL';

const ProjectCard = ({ project }) => {
  console.log(project);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Card style={{ width: '28rem' }} onClick={handleShow}>
        <Card.Img variant="top" src={project? `${serverURL}/uploads/${project.projectImage}` : "https://source.unsplash.com/random/400*300"} alt='image not found' width={'100'} height={'300px'} />
        <Card.Body>
          <Card.Title className='text-center'>{project.title}</Card.Title>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row'>
            <div className='col-6'>
              <img src={project? `${serverURL}/uploads/${project.projectImage}` : "https://source.unsplash.com/random/100*100"} width={'250'} height={'250px'} alt="" />
            </div>
            <div className='col-6 text-center'>
              <h4>{project.title}</h4>
              <p><b>Description of the project:</b> {project.overview} </p>
              <br />
              <p> <b>Technology used:</b> {project.language}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='d-flex justify-content-evenly'>
            <Button className='me-5' variant="secondary"><a href=""><FaGithub /></a></Button>
            <Button className='me-5' variant="secondary"><a href=""><FaLink /></a></Button>
            <Button className='' variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProjectCard;
