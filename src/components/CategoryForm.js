import React from 'react';
import { Link } from 'react-router-dom';
import { Input, IconButton } from '@material-ui/core';
import { Save, Cancel, Delete } from '@material-ui/icons';
import { Row, Col } from 'react-flexbox-grid';

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
    let deleteButton = (this.props.onDelete 
      ? <IconButton 
          color='inherit' 
          aria-label='Edit'
          onClick={() => this.props.onDelete(this.state.category)}>
          <Delete />
        </IconButton> 
        : null);
    return (
      <Row className="m-0">
        <Col xs={12} sm={6}>
          <Input name="label" 
            placeholder='Label...'
            onChange={this.onChange}
            defaultValue={this.state.category.label}  />
        </Col>
        <Col xs={12} sm={6}>
          <IconButton 
            color="inherit" 
            aria-label="Save" 
            onClick={() => this.props.onSubmit(this.state.category)}>
            <Save />
          </IconButton>
          {deleteButton}
          <Link to={'/items/'}>
            <IconButton color="inherit" aria-label="Cancel">
              <Cancel />
            </IconButton>
          </Link>
        </Col>
      </Row>
    );
  }
}

export default CategoryForm;
