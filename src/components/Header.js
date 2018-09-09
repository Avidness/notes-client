import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Icon, IconButton, Typography }  from '@material-ui/core';
import { Assignment, CreateNewFolder, LibraryAdd, Edit } from '@material-ui/icons';

import MenuContainer from '../containers/MenuContainer';
import '../static/styles/header.css';

const Header = () => {
  return (
    <AppBar id='header'>
      <Toolbar>
        <Icon color="inherit">
          <Assignment />
        </Icon>
        <Typography variant="title" color="inherit">
          Notes
        </Typography>

        <MenuContainer />

        <Link to={'/category'}>
          <IconButton color="inherit" aria-label="Edit Category">
            <Edit />
          </IconButton>
        </Link>

        <Link to={'/newcategory'}>
          <IconButton color="inherit" aria-label="New Category">
            <CreateNewFolder />
          </IconButton>
        </Link>

        <Link to={'/newitem'}>
          <IconButton color="inherit" aria-label="New Item">
            <LibraryAdd />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header;