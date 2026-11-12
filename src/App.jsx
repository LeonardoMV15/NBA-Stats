import { useState } from 'react';
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import {  Routes, Route  } from "react-router-dom"
import "./styles/App.css"
import NavBar from "./components/Navbar"
import DetailsPage from "./pages/DetailsPage.jsx"
import NotFound from "./pages/NotFound.jsx"

function App() {
    const [dark, setDark] = useState(false);


  return (

    <div className={`app ${dark ? 'dark' : ''}`}>
      <NavBar dark={dark} onToggle={setDark} />
    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/about" element={ <AboutPage /> } />
      <Route path="/teamInfo/:teamId" element={ <DetailsPage /> } />
          <Route path="*" element={ <NotFound /> }/>


    </Routes>
    </div>
  )
}

export default App
