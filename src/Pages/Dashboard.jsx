import React, { useEffect, useState } from 'react';
import MyProject from '../Components/MyProject';
import Profile from '../Components/Profile';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Dashboard = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    setUsername(storedUsername || ''); // Set username to stored value or empty string if not found
  }, []);

  return (
    <Container className="mt-5">
      <h4 className="text-center mb-4">Welcome, <span className="text-primary">{username}</span>!</h4>
      <Row>
        <Col lg={6}>
          <MyProject />
        </Col>
        <Col lg={6}>
          <Profile />
        </Col>
      </Row>
      <div className="text-center mt-5">
        <Link to="/projects" className="text-decoration-none">
          <Button variant="dark" className="px-4 py-2">
            <FaUser className="me-2" />
            View All Users' Projects
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Dashboard;
