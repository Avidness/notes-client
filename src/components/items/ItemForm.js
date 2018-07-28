import React from 'react';
import { Button, Segment, Icon, Input } from 'semantic-ui-react';
import { Row, Col } from 'react-flexbox-grid';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
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
  render(){
    return (
      <Segment vertical>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <Input fluid name="label" 
              placeholder='Label...'
              onChange={this.onChange}
              defaultValue={this.props.item.label}  />
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Input fluid name="description" 
              placeholder='Description...'
              onChange={this.onChange}
              defaultValue={this.props.item.description}  />
          </Col>
          <Col sm={6} lg={3}>
            <Button onClick={() => this.props.onSubmit(this.state.item)}>
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
