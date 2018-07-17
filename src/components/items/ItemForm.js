import React from 'react';
import { Button, Grid, Segment, Icon, Input } from 'semantic-ui-react';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      item: {}
    };
  }
  componentDidMount(){
    this.setState({ item: this.props.item });
  }
  onChange(e) {
    let edited_item = this.state.item;
    edited_item[e.target.name] = e.target.value;
    this.setState({ item: edited_item});
  }
  render(){
    return (
      <Segment>
        <Grid columns={4} centered>
          <Grid.Row verticalAlign='top'>
            <Grid.Column>
              <Input fluid name="label" 
                placeholder='Label...'
                onChange={this.onChange}
                defaultValue={this.props.item.label}  />
            </Grid.Column>
            <Grid.Column>
              <Input fluid name="description" 
                placeholder='Description...'
                onChange={this.onChange}
                defaultValue={this.props.item.description}  />
            </Grid.Column>
            <Grid.Column>
              <Button onClick={() => this.props.onSubmit(this.state.item)}>
                <Icon name='save' /> Save
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button onClick={this.props.cancel}>
                <Icon name='cancel' /> Cancel
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default ItemForm;
