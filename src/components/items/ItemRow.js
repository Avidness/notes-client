import React from 'react';
import { Button, Grid, Segment, Icon } from 'semantic-ui-react'

export const ItemRow = (props) => {
  let item = props.item;
  return (
    <Segment>
      <Grid columns={4} centered>
          <Grid.Column>
            {item.label}
          </Grid.Column>
          <Grid.Column>
            {item.description}
          </Grid.Column>
          <Grid.Column>
            <Button onClick={props.startEditing}>
              <Icon name='edit' /> Edit
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button onClick={props.deleteItem}>
              <Icon name='delete' /> Delete
            </Button>
          </Grid.Column>
      </Grid>
    </Segment>
  );
}

export default ItemRow;
