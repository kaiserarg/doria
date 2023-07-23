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
        <div className="flex justify-center pt-64 h-full">
          <MakeLobby setIsLobbyActive={setIsLobbyActive} setCurrentLobbyCode={setCurrentLobbyCode} />
        </div>
      );
    }
    else {
      return (
        <div className="flex justify-center pt-32">
          <CreateUser lobbyCode = {currentLobbyCode} />
        </div>
      );
    }
  }

  return (
    <div>
      <div className=" flex flex-col items-center"><HeaderLogo /></div>
      {checkLobbyActive()} 
      <div>Current Lobby Code: {currentLobbyCode}</div> 
      <div className=" sticky bottom-0"><Footer /></div>
    </div>
  )
  //line 29 is temp
}

export default App;