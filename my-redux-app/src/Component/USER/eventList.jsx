import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListEvent } from '../../redux/actions/event'; 
import EventCard from './EventCard'; 
import { Container, Row, Col } from 'react-bootstrap';

const EventList = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(ListEvent());
  }, [dispatch]);

  return (
    <Container>
      <h2 className="my-5 text-center">Eventi disponibili</h2>
      <Row className="g-4">
        {events && events.length > 0 ? (
          events.map((event) => (
            <Col xs={12} sm={6} md={4} lg={3} key={event.id}>
              <EventCard event={event} />
            </Col>
          ))
        ) : (
          <Col>
            <p className="text-center">Nessun evento disponibile.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default EventList;

