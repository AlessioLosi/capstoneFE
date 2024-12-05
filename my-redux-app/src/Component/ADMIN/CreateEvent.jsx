import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createEvent } from '../../redux/actions/event';  

const CreateEventForm = () => {
  const [nome, setNome] = useState('');
  const [artista, setArtista] = useState('');
  const [postiDisponibili, setPostiDisponibili] = useState('');
  const [data, setData] = useState('');
  const [luogo, setLuogo] = useState('');
  const [prezzo, setPrezzo] = useState('');
  const [error, setError] = useState('');
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const eventData = {
      nome,
      artista,
      postiDisponibili: Number(postiDisponibili), 
      data: new Date(data), 
      luogo,
      prezzo: parseFloat(prezzo),
    };


    dispatch(createEvent(eventData))
      .then(() => {
        setNome('');
        setArtista('');
        setPostiDisponibili('');
        setData('');
        setLuogo('');
        setPrezzo('');
        setError('');
      })
      .catch((err) => setError(err));
  };

  return (
    <form onSubmit={handleSubmit} >
      <h2>Crea un nuovo evento</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <div>
        <label>Nome evento:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Artista:</label>
        <input
          type="text"
          value={artista}
          onChange={(e) => setArtista(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Posti Disponibili:</label>
        <input
          type="number"
          value={postiDisponibili}
          onChange={(e) => setPostiDisponibili(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Data evento:</label>
        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Luogo:</label>
        <input
          type="text"
          value={luogo}
          onChange={(e) => setLuogo(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Prezzo:</label>
        <input
          type="number"
          value={prezzo}
          onChange={(e) => setPrezzo(e.target.value)}
          required
        />
      </div>

      <button type="submit">Crea Evento</button>
    </form>
  );
};

export default CreateEventForm;
