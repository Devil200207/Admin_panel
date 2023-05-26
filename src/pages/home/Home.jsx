import React from 'react';
import {Sidebar,Navbar} from '../../components/index';
import './home.scss';


const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
          container
        </div>
    </div>
  );
}

export default Home;