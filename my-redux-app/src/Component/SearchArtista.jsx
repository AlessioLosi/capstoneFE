import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../redux/actions/event";  
import EventCard from "./USER/EventCard";
import { Button, Container, Row, Col } from "react-bootstrap";
import search from "../../node_modules/bootstrap-icons/icons/search.svg";

const EventSearchByArtist = () => {
  const dispatch = useDispatch();
  const [artista, setArtista] = useState(""); 
  const events = useSelector((state) => state.events.events); 

  const handleSearch = (e) => {
    e.preventDefault();
    if (artista) {
      dispatch(fetchEvents(artista)); 
    }
  };

  return (
    <Container>
      <h2 className="my-4 text-center">Cerca Eventi per Artista</h2>
      <form onSubmit={handleSearch} className="d-flex justify-content-center mb-4">
        <input
          type="text"
          value={artista}
          onChange={(e) => setArtista(e.target.value)}
          placeholder="Inserisci nome artista"
          required
          className="form-control me-2"
        />
        <Button variant="dark" type="submit">
          <img src={search} alt="ricerca" />
        </Button>
      </form>
      <Row className="g-4">
        <h3 className="text-center">Eventi Disponibili:</h3>
        {events && events.length > 0 ? (
          events.map((event) => (
            <Col xs={12} sm={6} md={4} lg={3} key={event.id}>
              <EventCard event={event} />
            </Col>
          ))
        ) : (
          <Col>
            <p className="text-center">Nessun evento trovato per questo artista.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default EventSearchByArtist;
