import React from 'react'
import './Header.css'
import Button from './Button'
import me from './../../Assets/dabs.png'
import Headersocials from './Header_socials'

const Header = () => {
  return (
    <header>
      <div className="container header_container" id="home">
        <h5>Hello, I'm</h5>
        <h1>Dabs Manuel</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <Button />
        <Headersocials />

        <div className="me">
          <img src={me} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header