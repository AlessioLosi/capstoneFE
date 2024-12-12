import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MynavbarAdmin from './MynavbarAdmin';
import { Col, Container, Row, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CreatePost from '../FormPost';
import UserPosts from '../MyPost';
import MyComments from '../MyComments';
import Footercustom from '../Footer';
import MyBookings from '../MyBookings';
import { updateProfile, updateAvatar, AuthLog } from '../../redux/actions/login';

const AdminProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [newUserData, setNewUserData] = useState({
    nome: '',
    cognome: '',
    username: '',
  });
  const [newAvatar, setNewAvatar] = useState(null);

  const dispatch = useDispatch();
  const userData = useSelector(state => state.login.userData);

  useEffect(() => {
    dispatch(AuthLog());
  }, [dispatch]);

  const handleSaveChanges = () => {
    if (newUserData.nome || newUserData.cognome || newUserData.username) {
      dispatch(updateProfile(newUserData));
    }

    if (newAvatar) {
      dispatch(updateAvatar(newAvatar));
    }

    dispatch(AuthLog());
    setShowModal(false);
  };

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg">
      <MynavbarAdmin />
      <h2 className="text-center text-light my-4">Benvenut* nel tuo profilo</h2>
      <Container className="profile-container d-flex justify-content-center my-5 text-light">
        <Row className="align-items-center">
          <Col sm={12} md={3} className="text-center">
            <img
              src={userData.avatar}
              alt="foto profilo"
              className="rounded img-fluid profileinfo mb-4"
            />
          </Col>
          <Col sm={12} md={8} className="text-center text-md-start">
            <h3>{userData.nome} {userData.cognome}</h3>
            <h4>@{userData.username}</h4>
            <p>Email: {userData.email}</p>
          </Col>
          <Col sm={1} className="colonna pb-5">
            <Button
              className="elemento pb-5"
              onClick={() => setShowModal(true)}
            >
              <i className="bi bi-pencil-square"></i>
            </Button>
          </Col>
          <MyBookings className='my-5'/>
          <CreatePost />
          <UserPosts />
          <MyComments />
        </Row>
      </Container>
  
      <Modal show={showModal} onHide={() => setShowModal(false)} className='modal'>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Modifica Profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                defaultValue={userData.nome}
                onChange={(e) =>
                  setNewUserData({ ...newUserData, nome: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formCognome">
              <Form.Label>Cognome</Form.Label>
              <Form.Control
                type="text"
                defaultValue={userData.cognome}
                onChange={(e) =>
                  setNewUserData({ ...newUserData, cognome: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                defaultValue={userData.username}
                onChange={(e) =>
                  setNewUserData({ ...newUserData, username: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formAvatar">
              <Form.Label>Foto del profilo</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setNewAvatar(e.target.files[0])}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="text-light border-0" onClick={() => setShowModal(false)}>
            Annulla
          </Button>
          <Button className="purple" onClick={handleSaveChanges}>
            Salva modifiche
          </Button>
        </Modal.Footer>
      </Modal>

      <Footercustom />
    </div>
  );
};

export default AdminProfile;
