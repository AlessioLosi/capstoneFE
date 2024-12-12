import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserPosts, deletePost, updatePost } from '../redux/actions/post';
import { Card, Button, Row, Col, Container, Form, Modal, Image } from 'react-bootstrap';

const UserPosts = () => {
  const dispatch = useDispatch();
  const { userPosts, loading, error } = useSelector((state) => state.posts);

  const [showModal, setShowModal] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [updatedText, setUpdatedText] = useState('');

  useEffect(() => {
    dispatch(fetchUserPosts());
  }, [dispatch]);

  const handleDelete = (postId) => {
    dispatch(deletePost(postId)).then(() => {
      dispatch(fetchUserPosts());
    });
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setUpdatedText(post.testo);
    setShowModal(true);
  };

  const handleSave = () => {
    if (editingPost) {
      dispatch(updatePost(editingPost.id, { testo: updatedText })).then(() => {
        dispatch(fetchUserPosts());
        setShowModal(false);
        setEditingPost(null);
      });
    }
  };

  return (
    <Container>
      <h2 className="text-center my-4">I tuoi Post</h2>
      {loading && <p>Caricamento in corso...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Row className="d-flex justify-content-center">
        {userPosts && userPosts.length > 0 ? (
          userPosts.map((post) => (
            <Col xs={12} key={post.id} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <Row className="d-flex align-items-start">
                    <Col xs={2} className="d-flex justify-content-start">
                      <Image 
                        src={post.creatore.avatar} 
                        alt="profile" 
                        className="rounded-circle profile mt-1" 
                      />
                    </Col>
                    <Col xs={10}>
                      <Row className="d-flex justify-content-between">
                        <Col xs={12}>
                          <h6><strong>{post.creatore.username}</strong></h6>
                          <p className="text-muted">
                            {post.creatore.nome} {post.creatore.cognome}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Card.Text className="mt-2">{post.testo}</Card.Text>
                      </Row>
                    </Col>
                  </Row>
                  <Col xs={12} className="text-end text-muted mt-2">
                    <small>{new Date(post.data).toLocaleDateString()} {new Date(post.data).toLocaleTimeString()}</small>
                  </Col>
                  <div className="d-flex justify-content-between mt-3">
                    <Button
                      variant="danger"
                      className="text-white border-danger"
                      onClick={() => handleDelete(post.id)}
                    >
                      Elimina
                    </Button>
                    <Button
                      className="purple border-0"
                      onClick={() => handleEdit(post)}
                    >
                      Modifica
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <p>Non hai ancora postato nulla</p>
          </Col>
        )}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Testo del Post</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Annulla
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Salva Modifiche
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default UserPosts;
