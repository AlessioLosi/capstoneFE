import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListEvent } from '../redux/actions/event'; 
import EventCard from './EventCard'; 

const EventList = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(ListEvent());
  }, [dispatch]);

  return (
    <div >
      <h2>Eventi disponibili</h2>
      {events && events.length > 0 ? (
        events.map((event) => <EventCard key={event.id} event={event} />)
      ) : (
        <p>Nessun evento disponibile.</p>
      )}
    </div>
  );
};


export default EventList;
