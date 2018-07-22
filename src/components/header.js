import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

import img_gear from '../images/gear.svg';

const Header = () => {
  return (
    <header className="App-header">
      <img src={img_gear} className="App-logo" alt="logo" />
      <h1 className="App-title">Notes</h1>
    </header>
  )
}

export default Header;
