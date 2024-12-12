import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPrenotazioni, deletePrenotazione } from '../redux/actions/bookings';
import { Button, Spinner, Alert, Card, Row, Col } from 'react-bootstrap';

const MyBookings = () => {
    const dispatch = useDispatch();
    const { bookings, loading, error } = useSelector((state) => state.bookings);

    useEffect(() => {
        dispatch(fetchPrenotazioni());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deletePrenotazione(id));
    };

    return (
        <div className='my-5'>
            <h2 className='text-center my-5'>Le tue prenotazioni</h2>
            {loading && <Spinner animation="border" role="status" />}
            {error && <Alert variant="danger">{error}</Alert>}

            <Row className='my-5'>
                {bookings && bookings.length > 0 ? (
                    bookings.map((prenotazione) => (
                        <Col sm={12} key={prenotazione.id}>
                            <Card className='my-3'>
                                <Card.Body>
                                    <Row>
                                        <Col sm={2}>
                                            <img
                                                src={prenotazione.eventi.foto}
                                                alt="Evento"
                                                className='fotoevento'
                                            />
                                        </Col>
                                        <Col sm={10}>
                                            <Card.Title>{prenotazione.eventi.nome}</Card.Title>
                                            <Card.Text>{prenotazione.eventi.artista}</Card.Text>
                                            <Card.Text>{prenotazione.eventi.data}</Card.Text>
                                            <Button
                                            className='text-light border-light'
                                                variant="danger"
                                                onClick={() => handleDelete(prenotazione.id)}
                                            >
                                                Elimina
                                            </Button>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p className='text-center mt-5 mb-5'>Non ci sono prenotazioni</p>
                )}
            </Row>
        </div>
    );
};

export default MyBookings;
