import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteEvent, uploadEventImage, updateEvent} from "../../redux/actions/event";
import { Card, Button, Col, Row, Modal, Form } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

const EventCardAdmin = ({ event }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newImage, setNewImage] = useState(null);
  const [eventData, setEventData] = useState({
    nome: event.nome,
    artista: event.artista,
    data: event.data,
    prezzo: event.prezzo,
    luogo: event.luogo,
    postiDisponibili: event.postiDisponibili,
  });
  const handleShowEditModal = () => setShowEditModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);
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
  const handleUpdateEvent = async () => {
    const updatedEvent = { ...eventData };
    await dispatch(updateEvent(event.id, updatedEvent));
    window.location.reload();
    setShowEditModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
            <div className="d-flex justify-content-center flex-column align-items-center">
                <Button
                  onClick={handleShowEditModal}
                  className="purple mb-2"
                >
                  Modifica
                </Button>
                <Button
                  variant="danger"
                  onClick={handleDelete}
                  className="text-decoration-none text-white border-danger mb-2"
                >
                  Elimina
                </Button>
              </div>
          </Col>
        </Row>
      </Card>
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome Evento</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                value={eventData.nome}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formArtista">
              <Form.Label>Artista</Form.Label>
              <Form.Control
                type="text"
                name="artista"
                value={eventData.artista}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formData">
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="date"
                name="data"
                value={eventData.data}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formPrezzo">
              <Form.Label>Prezzo</Form.Label>
              <Form.Control
                type="number"
                name="prezzo"
                value={eventData.prezzo}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formLuogo">
              <Form.Label>Luogo</Form.Label>
              <Form.Control
                type="text"
                name="luogo"
                value={eventData.luogo}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formPosti">
              <Form.Label>Posti Disponibili</Form.Label>
              <Form.Control
                type="number"
                name="postiDisponibili"
                value={eventData.postiDisponibili}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  className="text-light" onClick={handleCloseEditModal}>
            Annulla
          </Button>
          <Button className="purple" onClick={handleUpdateEvent}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>

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
          <Button variant="secondary"  onClick={handleCloseModal} className="border-light text-light">
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
