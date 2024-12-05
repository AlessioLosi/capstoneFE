import React from 'react';
import EventList from '../USER/eventList';
import CreateEventForm from './CreateEvent';
import EventSearchByArtist from '../SearchArtista';
import EventListAdmin from './EventListAdmin';
import MyNav from '../Mynavbar';
import UserProfile from '../UserProfile';


function DashboardAdmin() {
  return (
    <div className='purple'>
      <MyNav/>
      <EventSearchByArtist/>
      <UserProfile/>
      <EventListAdmin/>
    </div>
  );
}

export default DashboardAdmin;

