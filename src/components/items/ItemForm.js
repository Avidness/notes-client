import React from 'react';
import { Link } from 'react-router-dom';
import { Select, MenuItem, Input, Button } from '@material-ui/core';
import { Segment, Icon } from 'semantic-ui-react';
import { Row, Col } from 'react-flexbox-grid';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.state = {
      item: {}
    };
  }
  componentDidMount(){
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
    if(this.props.item === null){
      return <span>loading</span>
    }
    return (
      <Segment vertical>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <Input name="label" 
              placeholder='Label...'
              onChange={this.onChange}
              defaultValue={this.props.item.label}  />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Input name="description" 
              placeholder='Description...'
              onChange={this.onChange}
              defaultValue={this.props.item.description}  />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Select 
              onChange={this.onCategoryChange}
              value={this.props.item.category.id}>
              {this.props.categories.map(function (cat, i) {
                return <MenuItem key={i} value={cat.id}>{cat.label}</MenuItem>})
              }
            </Select>
          </Col>
          <Col sm={6} lg={3}>
            <Button variant="contained" onClick={() => this.props.onSubmit(this.state.item)}>
              <Icon name='save' /> Save
            </Button>
          </Col>
          <Col sm={6} lg={3}>
            <Button onClick={this.props.cancel}>
              <Icon name='cancel' /> Cancel
            </Button>
          </Col>
        </Row>
      </Segment>
    );
  }
}

export default ItemForm;
