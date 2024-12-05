import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/post';
import { Card, Row, Col, Container } from 'react-bootstrap';

const AllPosts = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container>
      <h2 className="text-center my-4">Tutti i Post</h2>
      {loading && <p>Caricamento in corso...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <Row className="d-flex justify-content-center">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <Col xs={12} sm={8} md={6} lg={4} key={post.id} className="mb-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col xs={3} className="d-flex justify-content-center">
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
                      <div className="d-flex flex-column">
                        <strong>{post.creatore.username}</strong>
                        <span className="text-muted">
                          {post.creatore.nome} {post.creatore.cognome}
                        </span>
                        <Card.Text className="mt-2">{post.testo}</Card.Text>
                      </div>
                    </Col>
                  </Row>
                  <Col xs={12} className="text-end text-muted mt-2">
                    <small>
                      {new Date(post.data).toLocaleDateString()}{' '}
                      {new Date(post.data).toLocaleTimeString()}
                    </small>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <p>Nessun post disponibile</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default AllPosts;
