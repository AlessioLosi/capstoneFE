import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CreatePost from '../FormPost';
import UserPosts from '../MyPost';
import MyComments from '../MyComments';
import MynavbarUser from './UserNav';
import Footercustom from '../Footer';


const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const UserData = localStorage.getItem('userData');
    if (UserData) {
      setUserData(JSON.parse(UserData)); 
    }
  }, []);

  if (!userData) {
    return <p >Loading...</p>;
  }

  return (
    <div className="bg">
      <MynavbarUser/>
      <h2 className="text-center text-light my-4">Benvenut* nel tuo profilo</h2>
      <Container className="profile-container d-flex justify-content-center my-5 text-light">
        <Row className="align-items-center">
          <Col sm={12} md={4} className="text-center">
            <img
              src={userData.avatar}
              alt="foto profilo"
              className="rounded-circle img-fluid profile-img mb-4"
            />
          </Col>
          <Col sm={12} md={8} className="text-center text-md-start">
            <h3>{userData.nome} {userData.cognome}</h3>
            <h4>@{userData.username}</h4>
            <p>Email: {userData.email}</p>
          </Col>
          <CreatePost/>
          <UserPosts/>
          <MyComments/>
        </Row>
      </Container>
      <Footercustom/>
    </div>
  );
};

export default UserProfile;