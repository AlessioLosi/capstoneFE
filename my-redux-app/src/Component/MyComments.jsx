import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsByUser, deleteComment, updateComment } from '../redux/actions/comments';
import { Card, Button, Modal, Form, Row, Col } from 'react-bootstrap';

const MyComments = () => {
  const dispatch = useDispatch();
  const { userComments, loading, error } = useSelector((state) => state.comments);
  
  const [showModal, setShowModal] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);
  const [updatedText, setUpdatedText] = useState('');

  const handleDelete = (commentId) => {
    dispatch(deleteComment(commentId));
    dispatch(fetchCommentsByUser());
    window.location.reload();
  };

  const handleUpdate = (comment) => {
    setSelectedComment(comment);
    setUpdatedText(comment.testo);
    setShowModal(true);
  };

  const handleSaveUpdate = () => {
    if (selectedComment) {
      const updatedComment = { ...selectedComment, testo: updatedText };
      dispatch(updateComment(selectedComment.id, updatedComment));
      setShowModal(false);
    }
  };

  useEffect(() => {
    dispatch(fetchCommentsByUser());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h3 className='text-center'>I tuoi commenti</h3>
      {userComments.length === 0 ? (
        <p className='text-center'>Non hai commentato ancora nulla.</p>
      ) : (
        <Row>
          {userComments.map((comment) => (
            <Col sm={12} md={6} lg={4} key={comment.id}>
              <Card className='m-3'>
                <Card.Body>
                  <Card.Text>{comment.testo}</Card.Text>
                  <Card.Subtitle className="mb-2 text-muted">
                    {new Date(comment.data).toLocaleString()}
                  </Card.Subtitle>
                  <Row className='m-3'>
  <Col xs={12}  className="d-flex justify-content-start mb-2 mb-md-0">
    <Button
      onClick={() => handleUpdate(comment)}
      className="purple w-100"
    >
      Modifica
    </Button>
  </Col>
  <Col xs={12}  className="d-flex justify-content-end">
    <Button
      variant="danger"
      onClick={() => handleDelete(comment.id)}
      className="text-white border-light w-100"
    >
      Elimina
    </Button>
  </Col>
</Row>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica il commento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicText">
              <Form.Label>Testo del commento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Modifica il tuo commento"
                value={updatedText || ''}
                onChange={(e) => setUpdatedText(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='text-light border-light' onClick={() => setShowModal(false)}>
            Annulla
          </Button>
          <Button  className='purple'  onClick={handleSaveUpdate}>
            Salva modifiche
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyComments;

