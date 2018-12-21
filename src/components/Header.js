import React from 'react';
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import _ from 'lodash/core';
import { AppBar, Button, Toolbar, Icon, IconButton, Typography, Tabs, Tab, Menu, MenuItem }  from '@material-ui/core';
import { Assignment, CreateNewFolder, LibraryAdd, Edit, Folder, Menu as MenuIcon } from '@material-ui/icons';

import '../static/styles/header.css';

class Header extends React.Component {
  state = {
    anchorEl: null,
  };

  handleMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMenuClick = (url) => {
    this.props.history.push(url);
    this.handleMenuClose();
  };

  render(){
    const { anchorEl } = this.state;
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
            onChange={this.props.handleCategoryChange} 
            value={this.props.selectedCategoryId} 
            scrollable>

            {_.map(this.props.categories, function(cat, key) {
              return <Tab 
                key={cat.id}
                value={cat.id}
                label={cat.label}
                icon={<Folder />} />
            })}
          </Tabs>

          <Button color='inherit'
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleMenuOpen}>
            <MenuIcon />
          </Button>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleMenuClose}
            color='inherit'>
            <MenuItem onClick={() => this.handleMenuClick('/category/' + this.props.selectedCategoryId)}>
                <IconButton color='inherit' aria-label='Edit Category'>
                  <Edit /> 
                </IconButton>
                Edit Current Category
            </MenuItem>
            <MenuItem onClick={() => this.handleMenuClick('/newcategory')}>
                <IconButton color='inherit' aria-label='New Category'>
                  <CreateNewFolder />
                </IconButton> 
                New Category
            </MenuItem>
            <MenuItem onClick={() => this.handleMenuClick('/newitem')}>
                <IconButton color='inherit' aria-label='New Item'>
                  <LibraryAdd /> 
                </IconButton>
                Add Item
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(Header);