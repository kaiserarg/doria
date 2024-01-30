import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>doria.app</h1>
      <button onClick={() => navigate('/lobby')}>Enter Lobby</button>
    </div>
  );
}

export default MainPage;
