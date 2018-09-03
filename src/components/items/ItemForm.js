import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Select, MenuItem, Input, IconButton } from '@material-ui/core';
import { Save, Cancel } from '@material-ui/icons';
import { Row, Col } from 'react-flexbox-grid';

import Loading from '../Shared/Loading';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.state = {
      item: {}
    };
  }
  componentWillMount(){
    const edit_item = Object.assign({}, this.props.item);
    this.setState({ item: edit_item });
  }
  onChange(e) {
    let edited_item = this.state.item;
    edited_item[e.target.name] = e.target.value;
    this.setState({ item: edited_item});
  }
  onCategoryChange(e){
    let edited_item = this.state.item;
    edited_item.category.id = e.target.value;
    this.setState({ item: edited_item});
  }
  render(){
    if(this.props.loading){
      return <Loading />
    }
    return (
      <Fragment>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <Input name="label" 
              placeholder='Label...'
              onChange={this.onChange}
              defaultValue={this.state.item.label}  />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Input name="description" 
              placeholder='Description...'
              onChange={this.onChange}
              defaultValue={this.state.item.description}  />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Select 
              onChange={this.onCategoryChange}
              value={this.state.item.category.id}>
              {this.props.categories.map(function (cat, i) {
                return <MenuItem key={i} value={cat.id}>{cat.label}</MenuItem>})
              }
            </Select>
          </Col>
          <Col sm={6} lg={3}>
            <IconButton 
              color="inherit" 
              aria-label="Save" 
              onClick={() => this.props.onSubmit(this.state.item)}>
              <Save />
            </IconButton>
          </Col>
          <Col sm={6} lg={3}>
            <Link to={'/items/'}>
              <IconButton color="inherit" aria-label="Cancel">
                <Cancel />
              </IconButton>
            </Link>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default ItemForm;
