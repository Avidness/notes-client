import React from 'react';
import { AppBar, Toolbar, IconButton, Typography }  from '@material-ui/core';
import FaIcon from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import TabContainer from '../containers/TabContainer';

import '../static/styles/header.css';

const Header = () => {
  return (
    <AppBar id='header'>
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <FaIcon icon={faMobileAlt} />
        </IconButton>
        <Typography variant="title" color="inherit">
          Notes
        </Typography>

        <TabContainer />

      </Toolbar>
    </AppBar>
  )
}

export default Header;