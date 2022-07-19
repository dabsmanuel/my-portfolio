import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { GiBlackBook } from "react-icons/gi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineContactPhone } from "react-icons/md";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#About"
        onClick={() => setActiveNav("#About")}
        className={activeNav === "#About" ? "active" : ""}
      >
        <BiUserCircle />
      </a>
      <a
        href="#Experience"
        onClick={() => setActiveNav("#Experience")}
        className={activeNav === "#Experience" ? "active" : ""}
      >
        <GiBlackBook />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdOutlineContactPhone />
      </a>
    </nav>
  );
};

export default Nav;
