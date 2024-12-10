import React from 'react';
import EventListAdmin from './EventListAdmin';
import MynavbarAdmin from './MynavbarAdmin';
import CreateEventForm from './CreateEvent';
import Footercustom from '../Footer';


function GestioneEventi() {
  return (
    <div className='bg'>
      <MynavbarAdmin/>
      <CreateEventForm/>
      <EventListAdmin/>
      <Footercustom/>
    </div>
  );
}

export default GestioneEventi;

