import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../redux/actions/event";  // Azione per recuperare gli eventi per artista
import EventCard from "./EventCard"; // Componente per visualizzare i singoli eventi

const EventSearchByArtist = () => {
  const dispatch = useDispatch();
  const [artista, setArtista] = useState(""); // Stato per la ricerca per artista
  const events = useSelector((state) => state.events.events); // Lista degli eventi

  const handleSearch = (e) => {
    e.preventDefault();
    if (artista) {
      dispatch(fetchEvents(artista)); // Dispatch per recuperare gli eventi per artista
    }
  };

  return (
    <div style={styles.container}>
      <h2>Cerca Eventi per Artista</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={artista}
          onChange={(e) => setArtista(e.target.value)}
          placeholder="Inserisci nome artista"
          required
        />
        <button type="submit">Cerca</button>
      </form>

      {/* Visualizzazione degli eventi trovati */}
      <div style={styles.eventList}>
        {events && events.length > 0 ? (
          events.map((event) => (
            <EventCard key={event.id} event={event} />  // Mostra ogni evento come card
          ))
        ) : (
          <p>Nessun evento trovato per questo artista.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "900px",
    margin: "auto",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  eventList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
};

export default EventSearchByArtist;
