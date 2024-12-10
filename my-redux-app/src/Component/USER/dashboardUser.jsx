import React from 'react';
import CreatePost from '../FormPost';
import AllPosts from '../AllPost';
import UserPosts from '../MyPost';
import EventSearchByArtist from '../SearchArtista';
import MynavbarUser from './UserNav';
import Footercustom from '../Footer';

function DashboardUser() {
  return (
    <div className='bg'>
    <MynavbarUser/>
      <EventSearchByArtist/>
      <Footercustom/>
    </div>
  );
}

export default DashboardUser;
