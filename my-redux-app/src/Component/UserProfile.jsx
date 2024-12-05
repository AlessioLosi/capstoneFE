import React, { useEffect, useState } from 'react';

const UserProfile = () => {
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
    <div>
      <h1>Benvenuto, {userData.nome}</h1>
      <p>Email: {userData.email}</p>
      <p>Username: {userData.username}</p>
    </div>
  );
};

export default UserProfile;
