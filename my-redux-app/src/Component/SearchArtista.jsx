import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../redux/actions/event";  
import EventCard from "./EventCard";

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
    <div >
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
      <div >
        {events && events.length > 0 ? (
          events.map((event) => (
            <EventCard key={event.id} event={event} /> 
          ))
        ) : (
          <p>Nessun evento trovato per questo artista.</p>
        )}
      </div>
    </div>
  );
};


export default EventSearchByArtist;
