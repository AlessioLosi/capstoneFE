import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EventSearchByArtist from '../SearchArtista';
import MynavbarAdmin from './MynavbarAdmin';
import Footercustom from '../Footer';
import { AuthLog } from '../../redux/actions/login';

function DashboardAdmin() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login.userData);

  useEffect(() => {
    dispatch(AuthLog());
  }, [dispatch]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg">
      <MynavbarAdmin />
      <h2 className="text-center text-light my-5">Benvenut* {userData.nome} {userData.cognome}</h2>
      <EventSearchByArtist />
      <Footercustom />
    </div>
  );
}

export default DashboardAdmin;

