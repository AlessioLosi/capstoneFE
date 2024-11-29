import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div style={styles.card}>
      <h3>{event.nome}</h3>
      <p><strong>Artista:</strong> {event.artista}</p>
      <p><strong>Data:</strong> {new Date(event.data).toLocaleDateString()}</p>
      <p><strong>Luogo:</strong> {event.luogo}</p>
      <p><strong>Posti disponibili:</strong> {event.postiDisponibili}</p>
      <p><strong>Prezzo:</strong> €{event.prezzo.toFixed(2)}</p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '20px',
    margin: '10px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
};

export default EventCard;
