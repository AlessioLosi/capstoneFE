import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteEvent, uploadEventImage } from "../../redux/actions/event";
import { Card, Button, Col, Row, Modal, Form } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

const EventCardAdmin = ({ event }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [newImage, setNewImage] = useState(null);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleImageChange = (e) => setNewImage(e.target.files[0]);
  const handleUploadImage = () => {
    if (newImage) {
      dispatch(uploadEventImage(newImage, event.id));
      setShowModal(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteEvent(event.id));
  };

  return (
    <>
      <Card className="my-3 shadow-sm position-relative altezzaCard">
        <Button
          onClick={handleShowModal}
          className="elemento"
        >
             <i className="bi bi-pencil-square"></i>
        </Button>
        <Row>
          <Col sm={12}>
            <Card.Img src={event.foto} alt="foto evento" className="fotoEvento"/>
          </Col>
          <Col sm={12}>
            <Card.Body className="text-center cardBody">
              <Card.Title>{event.nome}</Card.Title>
              <Card.Text>
                <strong>Artista:</strong> {event.artista}
              </Card.Text>
              <Card.Text>
                <strong>Data:</strong> {new Date(event.data).toLocaleDateString()}
              </Card.Text>
              <Card.Text>
                <strong>Prezzo:</strong> {event.prezzo}€
              </Card.Text>
              <Card.Text>
                <strong>Luogo:</strong> {event.luogo}
              </Card.Text>
              <Card.Text>
                <strong>Posti:</strong> {event.postiDisponibili}
              </Card.Text>
            </Card.Body>
            <div className="d-flex justify-content-center">
                <Button variant="danger" onClick={handleDelete} className="text-decoration-none text-white border-danger">
                  Elimina
                </Button>
              </div>
          </Col>
        </Row>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Foto Evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFile">
              <Form.Label>Seleziona una nuova immagine</Form.Label>
              <Form.Control type="file" onChange={handleImageChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal} className="border-light text-light">
            Annulla
          </Button>
          <Button className="purple" onClick={handleUploadImage}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EventCardAdmin;
