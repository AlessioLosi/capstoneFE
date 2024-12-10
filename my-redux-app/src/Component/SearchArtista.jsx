import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents, ListEvent } from "../redux/actions/event";  
import EventCard from "./USER/EventCard";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import search from "../../node_modules/bootstrap-icons/icons/search.svg";
import EventList from "./USER/eventList";

const EventSearchByArtist = () => {
  const dispatch = useDispatch();
  const [artista, setArtista] = useState(""); 
  const events = useSelector((state) => state.events.events); 

  const handleSearch = (e) => {
    e.preventDefault();
    if (artista) {
      dispatch(fetchEvents(artista)); 
    }else{dispatch(ListEvent())}
  };

  return (
    <Container className="text-light">
      <h2 className="my-4 text-center">Cerca Eventi per Artista</h2>
      <Form onSubmit={handleSearch} className="d-flex justify-content-center mb-4">
        <div className="formricerca d-flex align-items-center">
          <input
            type="text"
            value={artista}
            onChange={(e) => setArtista(e.target.value)}
            placeholder="Inserisci nome artista"
            required
            className="form-control me-2"
          />
          <Button  type="submit" className="buttonSearch">
            <img src={search} alt="ricerca" />
          </Button>
        </div>
      </Form>
      <Row className="g-4">
        {events && events.length > 0 ? (
          events.map((event) => (
            <Col xs={12} sm={6} md={4} lg={3} key={event.id}>
              <EventCard event={event} />
            </Col>
          ))
        ) : (
          <Col>
            <p className="text-center text-light">Nessun evento trovato per questo artista.</p>
            <EventList/>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default EventSearchByArtist;

