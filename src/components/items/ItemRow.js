import React from 'react';
import { Button, Segment, Icon } from 'semantic-ui-react';
import { Row, Col } from 'react-flexbox-grid';

export const ItemRow = (props) => {
  let item = props.item;
  return (
    <Segment vertical>
      <Row>
        <Col xs={12} sm={6} lg={3}>
          {item.label}
        </Col>
        <Col xs={12} sm={6} lg={3}>
          {item.description}
        </Col>
        <Col sm={6} lg={3}>
          <Button onClick={props.startEditing}>
            <Icon name='edit' /> Edit
          </Button>
        </Col>
        <Col sm={6} lg={3}>
          <Button onClick={props.deleteItem}>
            <Icon name='delete' /> Delete
          </Button>
        </Col>
      </Row>
    </Segment>
  );
}

export default ItemRow;
