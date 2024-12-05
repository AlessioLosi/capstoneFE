import React from 'react';
import CreatePost from '../FormPost';
import AllPosts from '../AllPost';
import UserPosts from '../MyPost';
import MyNav from '../Mynavbar';
import EventSearchByArtist from '../SearchArtista';

function DashboardUser() {
  return (
    <div className='purple'>
      <MyNav/>
      <EventSearchByArtist/>
      <CreatePost/>
      <AllPosts/>
      <UserPosts/>
    </div>
  );
}

export default DashboardUser;
