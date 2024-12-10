import React, { useState, useEffect } from 'react';
import EventList from '../USER/eventList';
import CreateEventForm from './CreateEvent';
import EventSearchByArtist from '../SearchArtista';
import EventListAdmin from './EventListAdmin';
import UserProfile from './AdminProfile';
import MynavbarAdmin from './MynavbarAdmin';
import Footercustom from '../Footer';


function DashboardAdmin() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {

    const UserData = localStorage.getItem('userData');
    if (UserData) {
      setUserData(JSON.parse(UserData)); 
    }
  }, []);

  if (!userData) {
    return <p>Loading...</p>;
  }
  return (
    <div className='bg'>
      <MynavbarAdmin/>
      <h2 className='text-center text-light my-5'>Benvenut* {userData.nome} </h2>
      <EventSearchByArtist/>
      <Footercustom/>

    </div>
  );
}

export default DashboardAdmin;

