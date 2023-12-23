import React from 'react';

import Git from "../../imagenes/iconmonstr-github-3-240.png";
import Gmail from "../../imagenes/iconmonstr-email-11-240.png";
import Phone from "../../imagenes/iconmonstr-phone-8-64.png";
import LinkedIn from "../../imagenes/iconmonstr-linkedin-3-48.png";

import "./SocialMedia.css"

const SocialMedia = () => {
  return (
    <div className='containerSocial'>
      <li>
        <img src={Phone} alt="logoPhone" />
        +543434651573
      </li>
      <br />
      <li>
        <img src={Gmail} alt="logoGmail" />
        mauriruffini32@gmail.com
      </li>
      <li>
        <br />
        <img src={Git} alt="logoGit" />
        <a href='https://github.com/mauriruf32' target='_blank' rel='noopener noreferrer'>
          github.com/mauriruf32
        </a>
      </li>
      <br />
      <li>
        <img src={LinkedIn} alt="logoIn" />
        <a href='https://www.linkedin.com/in/mauricio-fabro/' target='_blank' rel='noopener noreferrer'>
          mauricio-fabro
        </a>
      </li>
    </div>
  )
}

export default SocialMedia;
