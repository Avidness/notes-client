import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Segment, Icon } from 'semantic-ui-react';
import { Row, Col } from 'react-flexbox-grid';

export const ItemRow = (props) => {
  let item = props.item;
  
  return (
    <Segment vertical>
      <Row>
        <Col xs={12} sm={4}>
          {item.label}
        </Col>
        <Col xs={12} sm={4}>
          {item.description}
        </Col>
        <Col xs={12} sm={4}>
          <Link to={'/item/' + props.item.id}>
            <Button>
              <Icon name='edit' /> Edit
            </Button>
          </Link>
        </Col>
      </Row>
    </Segment>
  );
}

export default ItemRow;
