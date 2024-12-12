import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../redux/actions/post'; 
import { Button, Form, Row, Col, Container } from 'react-bootstrap';

const CreatePost = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(createPost({ testo: text }));
      setText('');
      window.location.reload();
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row className="w-100">
        <Col xs={12} sm={8} md={6} lg={4} className="mx-auto">
          <h2 className='text-center mb-4'>Crea un nuovo post</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                as="textarea"
                rows={3}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Inserisci il testo del tuo post'

              />
            </Form.Group>
            <Button type="submit" className="w-100 mt-3 purple border-0">
              Crea Post
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreatePost;
