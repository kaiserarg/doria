import React from 'react'
import HeaderLogo from './components/HeaderLogo'
import MakeLobby from './components/MakeLobby'
import Footer from './components/Footer'
import CreateUser from './components/CreateUser'
import './index.css'

const App = () => {
  return (
    <div>
      <HeaderLogo />
      <MakeLobby/>
      <CreateUser />
      <Footer />
    </div>
  )
}

export default App;