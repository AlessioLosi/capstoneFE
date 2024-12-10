import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AllPosts from '../AllPost';
import CreatePost from '../FormPost';
import MynavbarUser from './UserNav';
import Footercustom from '../Footer';


const UserPostPage = () => {
  return (
    <div className="bg">
      <MynavbarUser />
      <h2 className="text-center text-light my-4">Benvenut* nel tuo profilo</h2>
      <Container className="profile-container d-flex justify-content-center my-5 text-light">
        <Row className="align-items-center">
            <CreatePost/>
            <AllPosts/>
        </Row>
      </Container>
      <Footercustom/>
    </div>
  );
};

export default UserPostPage;