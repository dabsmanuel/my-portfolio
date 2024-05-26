import React from 'react'
import './About.css'

const Aboutprops = ( {icons, title, params}) => {
  return (
    <div className="about_cards">
      <article className="about_card">
        <i>{icons}</i>
        <h5>{title}</h5>
        <small>{params}</small>
      </article>
    </div>
  );
}

export default Aboutprops