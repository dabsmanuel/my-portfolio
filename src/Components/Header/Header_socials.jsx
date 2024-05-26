import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'
import { ImGithub } from 'react-icons/im'


const Header_socials = () => {
  return (
    <div className="Header_socials">
      <a href="https://linkedin.com/in/dabobuboibi-oyibo-a87717231" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/dabsmanuel" target="blank">
        <ImGithub />
      </a>
      <a href="https://twitter.com/dabs_manuel" target="blank">
        <FiTwitter />
      </a>
      <a href="https://Instagram.com/dabs_manuel" target="blank">
        <FaInstagram />
      </a>
    </div>
  );
}

export default Header_socials