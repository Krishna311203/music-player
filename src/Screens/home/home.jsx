import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Library from '../library/library';
import Feed from '../feed/feed';
import Player from '../player/player';
import Favorites from '../favorites/favorites';
import Trending from '../trending/trending';
import './home.css';
import SideBar from '../../Components/SideBar/SideBar';


const Home = () => {
  return (
<div className="main-body">
<Router>
<SideBar/>
      <Routes>
        <Route path="/" element={<Library/>} />
        <Route path="/feed" element={<Feed/>} />
        <Route path="/player" element={<Player/>} />
        <Route path="/library" element={<Library/>} />
        <Route path="/trending" element={<Trending/>} />
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
    </Router>
</div>
    
  );
};

export default Home;
