import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div >
      <h3>{event.nome}</h3>
      <p><strong>Artista:</strong> {event.artista}</p>
      <p><strong>Data:</strong> {new Date(event.data).toLocaleDateString()}</p>
      <p><strong>Luogo:</strong> {event.luogo}</p>
      <p><strong>Posti disponibili:</strong> {event.postiDisponibili}</p>
      <p><strong>Prezzo:</strong> €{event.prezzo.toFixed(2)}</p>
    </div>
  );
};



export default EventCard;
