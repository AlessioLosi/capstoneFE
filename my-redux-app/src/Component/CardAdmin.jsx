import React from "react";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../redux/actions/event";

const EventCardAdmin = ({ event }) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        // Quando clicchi sul bottone, dispatcha l'azione per eliminare l'evento
        dispatch(deleteEvent(event.id));  // Passa l'ID dell'evento da eliminare
      };
  return (
    <div style={styles.card}>
      <h3>{event.nome}</h3>
      <p><strong>Artista:</strong> {event.artista}</p>
      <p><strong>Data:</strong> {new Date(event.data).toLocaleDateString()}</p>
      <p><strong>Prezzo:</strong> {event.prezzo}€</p>
      <p><strong>Luogo:</strong> {event.luogo}</p>
      <button onClick={handleDelete} style={styles.deleteButton}>
        Elimina
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  deleteButton: {
    backgroundColor: "red",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default EventCardAdmin;
