import React, {useState} from "react";
import HeaderLogo from './components/HeaderLogo'
import MakeLobby from './components/MakeLobby'
import Footer from './components/Footer'
import CreateUser from './components/CreateUser'
import './index.css'

const App = () => {
  const [isLobbyActive, setIsLobbyActive] = useState(true);
  const [currentLobbyCode, setCurrentLobbyCode] = useState(''); 

  return (
    <div>
      <HeaderLogo />
      {isLobbyActive ? <MakeLobby setIsLobbyActive={setIsLobbyActive} setCurrentLobbyCode={setCurrentLobbyCode} /> : <CreateUser />}
      <div>Current Lobby Code: {currentLobbyCode}</div>
      <Footer />
    </div>
  )
}

export default App;