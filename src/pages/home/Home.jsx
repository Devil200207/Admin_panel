import React from 'react';
import {Sidebar,Navbar,Widget,Featured,Chart,Tables} from '../../components/index';
import './home.scss';


const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          <div className="charts">
            <Featured/>
            <Chart/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transaction</div>
            <Tables/>
          </div>
        </div>
    </div>
  );
}

export default Home;