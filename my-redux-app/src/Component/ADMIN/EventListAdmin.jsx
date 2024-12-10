import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListEvent } from '../../redux/actions/event';
import EventCardAdmin from './CardAdmin';
import { Container, Row, Col } from 'react-bootstrap';

const EventListAdmin = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(ListEvent());
  }, [dispatch]);

  return (
    <Container>
      <h2 className="my-4 text-center text-light">Gestisci gli Eventi</h2>
      <p className="text-center text-light">Da qui puoi eliminare o modificare i tuoi Eventi</p>
      <Row className="g-4">
        {events && events.length > 0 ? (
          events.map((event) => (
            <Col xs={12} sm={6} md={4} lg={3} key={event.id}>
              <EventCardAdmin event={event} />
            </Col>
          ))
        ) : (
          <Col>
            <p className="text-center text-light">Nessun evento disponibile.</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default EventListAdmin;
