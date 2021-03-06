import React from 'react';

import { Card, Container, Row, Col } from 'react-bootstrap';
import './style.css';
import { useAuth0 } from '@auth0/auth0-react';

const ProfilePage = () => {
  const { user } = useAuth0();
  const { name, picture, email } = user;

  return (
    <Container fluid className="pt-5">
      <Row>
        <Col className="col-lg-6 col-sm-12 m-auto">
          <Card className="bgProfileComponent custom-style-profile bg-light">
            <Card.Header className="profile-title-style bg-light">
              <h3>Profile</h3>
            </Card.Header>
            <Card.Body className="d-flex flex-column">
              <Col className="center">
                <Card.Img
                  className="profile-img-style"
                  variant="top"
                  src={picture}
                />
              </Col>
              <Col className="text-style">
                <h5>{name}</h5>
                <p className="head text-muted">{email}</p>
              </Col>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
