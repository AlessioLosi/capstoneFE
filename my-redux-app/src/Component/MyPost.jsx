import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserPosts, deletePost } from '../redux/actions/post';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

const UserPosts = () => {
  const dispatch = useDispatch();
  const { userPosts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchUserPosts());
  }, [dispatch]);

  const handleDelete = (postId) => {
    dispatch(deletePost(postId)).then(() => {
      dispatch(fetchUserPosts());
    });
  };

  return (
    <Container>
      <h2 className="text-center my-4">I tuoi Post</h2>
      {loading && <p>Caricamento in corso...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Row className="d-flex justify-content-center">
        {userPosts && userPosts.length > 0 ? (
          userPosts.map((post) => (
            <Col xs={12} sm={8} md={6} lg={4} key={post.id} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <Row className="d-flex align-items-center">
                    <Col xs={3} className="d-flex align-items-center justify-content-center">
                      <img
                        src={post.creatore.avatar}
                        alt="profile"
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                        }}
                      />
                    </Col>
                    <Col xs={9}>
                    <Row>
                          <h6><strong>{post.creatore.username}</strong> </h6>
                          <p className=" text-muted">
                            {post.creatore.nome} {post.creatore.cognome}
                          </p>
                          </Row>
                          <Row> <Card.Text className="mt-2">{post.testo}</Card.Text></Row>
                    </Col>
                  </Row>
                  <Col xs={12} className="text-end text-muted mt-2">
                      <small>{new Date(post.data).toLocaleDateString()} {new Date(post.data).toLocaleTimeString()}</small>
                    </Col>
                  <Button
                    variant="danger"
                    className='text-white border-danger'
                    onClick={() => handleDelete(post.id)}
                  >
                    Elimina
                  </Button>
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
    </Container>
  );
};

export default UserPosts;
