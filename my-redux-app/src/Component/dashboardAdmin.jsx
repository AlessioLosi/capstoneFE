import React from 'react';
import EventList from './eventList';
import CreateEventForm from './CreateEvent';
import EventSearchByArtist from './SearchArtista';
import EventListAdmin from './EventListAdmin';

function DashboardAdmin() {
  return (
    <div>
      <h2>Benvenuto nella Dashboard Admin!</h2>
      <p>Puoi gestire gli eventi e gli utenti qui.</p>
      <EventList/>
      <CreateEventForm/>
      <EventSearchByArtist/>
      <EventListAdmin/>
    </div>
  );
}

export default DashboardAdmin;
