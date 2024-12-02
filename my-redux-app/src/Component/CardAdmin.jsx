import React from "react";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../redux/actions/event";

const EventCardAdmin = ({ event }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteEvent(event.id));  
      };
  return (
    <div >
      <h3>{event.nome}</h3>
      <p><strong>Artista:</strong> {event.artista}</p>
      <p><strong>Data:</strong> {new Date(event.data).toLocaleDateString()}</p>
      <p><strong>Prezzo:</strong> {event.prezzo}€</p>
      <p><strong>Luogo:</strong> {event.luogo}</p>
      <button onClick={handleDelete} >
        Elimina
      </button>
    </div>
  );
};

export default EventCardAdmin;
