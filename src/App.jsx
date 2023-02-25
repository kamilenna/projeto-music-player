//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import IconsLogo from "./assets/icons-logo.png"
import { FaPlayCircle } from "react-icons/fa";

function App() {

  return (
    <div className="App">
      <div className='Logo'><img src={IconsLogo} alt="" /></div>
      <div className='content'>
        <h2><i>Encontre</i> e <i>aproveite</i> suas músicas favoritas!</h2>
        <button>Vamos começar <FaPlayCircle className='icon-play' /></button>
      </div>
    </div>
  )
}

export default App
