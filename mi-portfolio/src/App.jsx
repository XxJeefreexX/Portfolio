import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  return (
    <>
      <header>
        <div className="container">
          <div className="hero">
            <div className="hero-text">
              <h1>Hola, soy un desarrollador web</h1>
              <p>Me especializo en crear sitios web modernos y responsivos.</p>
              <a href="#contact" className="btn">Contáctame</a>
            </div>
            <div className="hero-image">
              <img src={heroImg} alt="Hero" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default App
