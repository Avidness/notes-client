import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash/core';
import { AppBar, Toolbar, Icon, IconButton, Typography, Tabs, Tab }  from '@material-ui/core';
import { Assignment, CreateNewFolder, LibraryAdd, Edit, Folder } from '@material-ui/icons';

import '../static/styles/header.css';

const Header = (props) => {
  return (
    <AppBar id='header'>
      <Toolbar>
        <Icon color="inherit">
          <Assignment />
        </Icon>
        <Typography variant="title" color="inherit">
          Notes
        </Typography>

        <Tabs 
          id='tab-container'
          onChange={props.handleCategoryChange} 
          value={props.selectedCategoryId} 
          scrollable>

          {_.map(props.categories, function(cat, key) {
            return <Tab 
              key={cat.id}
              value={cat.id}
              label={cat.label}
              icon={<Folder />} />
          })}
        </Tabs>

        <Link to={'/category/' + props.selectedCategoryId}>
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