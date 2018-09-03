import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { Row, Col } from 'react-flexbox-grid';

export const ItemRow = (props) => {
  let item = props.item;
  
  return (
    <Row className="item-row">
      <Col xs={12} sm={4}>
        {item.label}
      </Col>
      <Col xs={12} sm={4}>
        {item.description}
      </Col>
      <Col xs={12} sm={4}>
        <Link to={'/item/' + props.item.id}>
          <IconButton color='inherit' aria-label='Edit'>
            <Edit />
          </IconButton>
        </Link>
      </Col>
    </Row>
  );
}

export default ItemRow;
