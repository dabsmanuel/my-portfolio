import React, { useState, useEffect } from "react";
import './Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])
  return (
    <footer>
      <a href="#home" className="footer_logo">
        Dabs
      </a>

      <ul className="footer-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/dabs_manuel">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/dabs_manuel">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer_copy">
        <small>&copy; Dabs Manuel - {date}</small>
      </div>
    </footer>
  );
}

export default Footer