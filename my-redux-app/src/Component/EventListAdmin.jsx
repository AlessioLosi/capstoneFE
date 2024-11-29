import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListEvent } from '../redux/actions/event'; // Importa l'azione corretta
import EventCardAdmin from './CardAdmin';

const EventListAdmin = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events); // Accedi all'array corretto

  useEffect(() => {
    dispatch(ListEvent());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <h2>Eventi disponibili</h2>
      {events && events.length > 0 ? (
        events.map((event) => <EventCardAdmin key={event.id} event={event} />)
      ) : (
        <p>Nessun evento disponibile.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '8px',
  },
};

export default EventListAdmin;
