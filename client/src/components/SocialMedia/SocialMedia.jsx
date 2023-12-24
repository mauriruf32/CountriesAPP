import React from 'react';

import Git from "../../imagenes/iconmonstr-github-3-240.png";
import LinkedIn from "../../imagenes/iconmonstr-linkedin-3-48.png";

import "./SocialMedia.css"

const SocialMedia = () => {
  return (
    <div className='containerSocial'>
      <li>
        <a href='https://github.com/mauriruf32' target='_blank' rel='noopener noreferrer'>
        <img src={Git} alt="logoGit" />
        </a>
      </li>
      <br />
      <li>
        <a href='https://www.linkedin.com/in/mauricio-fabro/' target='_blank' rel='noopener noreferrer'>
        <img src={LinkedIn} alt="logoIn" />
        </a>
      </li>
    </div>
  )
}

export default SocialMedia;
