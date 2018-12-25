import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, TextField } from '@material-ui/core';
import { Save, Cancel } from '@material-ui/icons';
import moment from 'moment';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);

    const edit_category = Object.assign({}, this.props.category);
    this.state = {
      category: edit_category
    };
  }
  onChange(e) {
    let edit_category = this.state.category;
    edit_category[e.target.name] = e.target.value;
    this.setState({ item: edit_category});
  }
  render(){
    let category = this.state.category;
    return (
      <Fragment>

        {(category.lastModifiedAt 
        ? moment(category.lastModifiedAt).format('llll') 
        : null)}

        <TextField name="label" 
          placeholder='Label...'
          onChange={this.onChange}
          defaultValue={category.label}
          variant='outlined'
          fullWidth={true} />

        <IconButton 
          color="inherit" 
          aria-label="Save" 
          onClick={() => this.props.onSubmit(category)}>
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

export default CategoryForm;
