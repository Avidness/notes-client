import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Row, Col } from 'react-flexbox-grid';

export const ItemRow = (props) => {
  let item = props.item;
  
  return (
    <Fragment>
      <Row>
        <Col xs={12} sm={4}>
          {item.label}
        </Col>
        <Col xs={12} sm={4}>
          {item.description}
        </Col>
        <Col xs={12} sm={4}>
          <Link to={'/item/' + props.item.id}>
            <Button>Edit</Button>
          </Link>
        </Col>
      </Row>
    </Fragment>
  );
}

export default ItemRow;
