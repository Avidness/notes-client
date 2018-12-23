import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, IconButton, TextField } from '@material-ui/core';
import { Save, Cancel } from '@material-ui/icons';
import _ from 'lodash/core';
import Editor from 'react-medium-editor';
require('medium-editor/dist/css/medium-editor.css');
require('medium-editor/dist/css/themes/default.css');

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.onLabelChange = this.onLabelChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);

    const edit_item = Object.assign({}, this.props.item);
    this.state = { item: edit_item };
  }
  onLabelChange(e) {
    let edited_item = this.state.item;
    edited_item[e.target.name] = e.target.value;
    this.setState({ item: edited_item});
  }
  onDescChange(newText){
    let edited_item = this.state.item;
    edited_item.description = newText;
    this.setState({ item: edited_item});
  }
  onCategoryChange(e){
    let edited_item = this.state.item;
    edited_item.category.id = e.target.value;
    this.setState({ item: edited_item});
  }

  render(){
    return (
      <Fragment>
        <TextField 
          name='label' 
          placeholder='Label...'
          onChange={this.onLabelChange}
          defaultValue={this.state.item.label}
          fullWidth={true} />

        <TextField 
          select
          onChange={this.onCategoryChange}
          value={this.state.item.category.id}
          variant='outlined'
          fullWidth={true}>
          {_.map(this.props.categories, function(cat, key) {
            return <MenuItem key={key} value={cat.id}>{cat.label}</MenuItem>})
          })}
        </TextField>

        <Editor
          name='description'
          text={this.state.item.description}
          onChange={this.onDescChange}
          style={{height:'50vh'}} />

        <IconButton 
          color="inherit" 
          aria-label="Save" 
          onClick={() => this.props.onSubmit(this.state.item)}>
          <Save />
        </IconButton>

        <Link to={'/items/'}>
          <IconButton color="inherit" aria-label="Cancel">
            <Cancel />
          </IconButton>
        </Link>
      </Fragment>
    );
  }
}

export default ItemForm;
