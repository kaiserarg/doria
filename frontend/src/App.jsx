import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Lobby from './Lobby';
import Game from './Game';
import AnagramArena from './AnagramArena'; // Import your game components

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path='/game/:id' element={<Game />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
