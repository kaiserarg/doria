import React, {useState} from "react";
import HeaderLogo from './components/HeaderLogo'
import MakeLobby from './components/MakeLobby'
import Footer from './components/Footer'
import CreateUser from './components/CreateUser'
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
      <div className=" flex flex-col items-center"><HeaderLogo /></div>
      {checkLobbyActive()} 
      <div className=" sticky bottom-0"><Footer /></div>
    </div>
  );
}

export default App;