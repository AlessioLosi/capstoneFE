import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/post';
import { createComment, fetchCommentsByPost } from '../redux/actions/comments';
import { Card, Row, Col, Container, Button, Form, Spinner, Alert } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";


const AllPosts = () => {
  const dispatch = useDispatch();
  const { posts, loading: postsLoading, error: postsError } = useSelector((state) => state.posts);
  const { commentsByPost, loading: commentsLoading, error: commentsError } = useSelector(
    (state) => state.comments
  );
  const [commentText, setCommentText] = useState({});
  const [commentsVisibility, setCommentsVisibility] = useState({});

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    if (posts && posts.length > 0) {
      posts.forEach((post) => {
        dispatch(fetchCommentsByPost(post.id));
      });
    }
  }, [dispatch, posts]);

  const handleCommentChange = (postId, e) => {
    setCommentText((prevText) => ({
      ...prevText,
      [postId]: e.target.value,
    }));
  };

  const handleCommentSubmit = (postId) => {
    if (commentText[postId]?.trim() !== '') {
      dispatch(createComment({ testo: commentText[postId] }, postId))
        .then(() => {
          dispatch(fetchCommentsByPost(postId));
          setCommentText((prevText) => ({ ...prevText, [postId]: '' }));
        })
        .catch((err) => console.error('Errore nel commento:', err));
    }
  };

  const toggleCommentsVisibility = (postId) => {
    setCommentsVisibility((prevVisibility) => ({
      ...prevVisibility,
      [postId]: !prevVisibility[postId],
    }));
  };

  return (
    <Container>
      <h2 className="text-center my-4">Tutti i Post</h2>

      {postsLoading && <Spinner animation="border" role="status" />}
      {postsError && <Alert variant="danger">{postsError}</Alert>}

      <Row>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <Col sm={12} key={post.id} className="mb-4">
              <Card className="altezza">
                <Card.Body>
                  <Row className="align-items-center mb-3">
                    <Col xs={3} sm={2} md={1}>
                      <img
                        src={post.creatore.avatar}
                        alt="profile"
                        className="rounded-circle profile"
                      />
                    </Col>
                    <Col xs={9} sm={10} md={11}>
                      <strong>{post.creatore.username}</strong>
                      <br />
                      <p>{post.creatore.nome} {post.creatore.cognome}</p>
                    </Col>
                  </Row>

                  <Card.Text>{post.testo}</Card.Text>

                  <Col xs={12} className="text-end text-muted mt-2">
                    <small>
                      {new Date(post.data).toLocaleDateString()} {new Date(post.data).toLocaleTimeString()}
                    </small>
                  </Col>

                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleCommentSubmit(post.id);
                    }}
                    className="d-flex mt-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Scrivi un commento..."
                      value={commentText[post.id] || ''}
                      onChange={(e) => handleCommentChange(post.id, e)}
                      className="me-3"
                    />
                    <Button variant="primary" type="submit" size="md" className='purple'>
                      <i className="bi bi-send text-light"></i>
                    </Button>
                  </Form>

                  <Button
                    variant="link"
                    onClick={() => toggleCommentsVisibility(post.id)}
                    className="mt-2 border-light text-muted"
                  >
                    {commentsVisibility[post.id] ? 'Nascondi Commenti' : 'Vedi i Commenti'}
                  </Button>

                  {commentsVisibility[post.id] && (
                    <div className="mt-3">
                      {commentsLoading ? (
                        <Spinner animation="border" size="sm" role="status" />
                      ) : commentsError ? (
                        <Alert variant="danger">{commentsError}</Alert>
                      ) : commentsByPost[post.id] && commentsByPost[post.id].length > 0 ? (
                        <div>
                          <h6 className='text-center'>Commenti:</h6>
                          {commentsByPost[post.id].map((comment) => (
                            <Card key={comment.id} className="mb-2">
                              <Card.Body>
                                <Row className="align-items-center">
                                  <Col xs={3}>
                                    <img
                                      src={comment.creatore.avatar}
                                      alt="profile"
                                      className="rounded-circle profile"
                                    />
                                  </Col>
                                  <Col xs={9}>
                                    <strong>{comment.creatore.username}</strong>
                                    <div>
                                      <p>{comment.testo}</p>
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs={12} className="text-end text-muted mt-2">
                                    <small>
                                      {new Date(comment.data).toLocaleDateString()} {new Date(comment.data).toLocaleTimeString()}
                                    </small>
                                  </Col>
                                </Row>
                              </Card.Body>
                            </Card>
                          ))}
                        </div>
                      ) : (
                        <div><p>Nessun commento ancora</p></div>
                      )}
                    </div>
                  )}
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
