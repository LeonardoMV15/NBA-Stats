import { useState } from 'react';
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import {  Routes, Route  } from "react-router-dom"
import "./styles/App.css"

function App() {
    const [dark, setDark] = useState(false);


  return (

    <div className={`app ${dark ? 'dark' : ''}`}>

    <Routes>


      <Route path="/" element={ <HomePage dark={dark} onToggle={setDark}/> } />
      <Route path="/about" element={ <AboutPage /> } />

    </Routes>
    </div>
  )
}

export default App
