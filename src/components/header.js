import React from 'react';

import img_gear from '../static/images/gear.svg';
import '../static/styles/header.css';

const Header = () => {
  return (
    <header id='header'>
      <img src={img_gear} id='logo' alt='logo' />
      <h1 id='title'>Notes</h1>
    </header>
  )
}

export default Header;