import React, {useState} from "react";
import HeaderLogo from './Deprecated/HeaderLogo'
import MakeLobby from './Deprecated/MakeLobby'
import Footer from './Deprecated/Footer'
import CreateUser from './Deprecated/CreateUser'
import PlayerCard from "./components/PlayerCard";
import MainFrame from "./components/MainFrame";
import './index.css'

const App = () => {
  const [isLobbyActive, setIsLobbyActive] = useState(true);
  const [currentLobbyCode, setCurrentLobbyCode] = useState('');

  const checkLobbyActive = () => {
    if (isLobbyActive) {
      return (
        <MakeLobby setIsLobbyActive={setIsLobbyActive} setCurrentLobbyCode={setCurrentLobbyCode} />
      );
    }
    else {
      return (
        <div className="flex justify-center pt-24">
          <CreateUser lobbyCode = {currentLobbyCode} />
        </div>
      );
    }
  }

  return (
    <div>
      <div className=""><MainFrame /></div>
    </div>
  );
}

export default App;