import React, { Component, useState } from 'react';
import '../componentscss/Home.css';
import Requests from '../components/Requests';
import SidenavBar from './SidenavBar';
import { Route, Router,withRouter } from 'react-router-dom';
import Navbar from './Navbar';

export const Home = ({ user }) => {


  return (

    <>

    <div >
      <div>
        <Requests user={user} />
      </div>
    </div>

    </>
  )
}


export default Home;
