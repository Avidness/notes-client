import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, IconButton, TextField } from '@material-ui/core';
import { Save, Cancel } from '@material-ui/icons';
import _ from 'lodash/core';
import moment from 'moment';
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
    let item = this.state.item;
    return (
      <Fragment>
        
        {(item.lastModifiedAt 
        ? moment(item.lastModifiedAt).format('llll') 
        : null)}

        <TextField 
          name='label' 
          placeholder='Label...'
          onChange={this.onLabelChange}
          defaultValue={item.label}
          fullWidth={true} />

        <TextField 
          select
          onChange={this.onCategoryChange}
          value={item.category.id}
          variant='outlined'
          fullWidth={true}>
          {_.map(this.props.categories, function(cat, key) {
            return <MenuItem key={key} value={cat.id}>{cat.label}</MenuItem>})
          })}
        </TextField>

        <Editor
          name='description'
          text={item.description}
          onChange={this.onDescChange}
          style={{height:'50vh', textAlign:'left'}} />

        <IconButton 
          color="inherit" 
          aria-label="Save" 
          onClick={() => this.props.onSubmit(item)}>
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
