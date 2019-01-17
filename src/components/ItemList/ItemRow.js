import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Card } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import moment from 'moment';

const RowWrapper = styled.section`
  padding: .5em;
  margin: 0;
`;

export const ItemRow = (props) => {
  let item = props.item;
  return (
    <RowWrapper>
      <Card raised={true}>
        <Row>
          <Col xs={6} sm={4}>
            {item.label}
          </Col>

          <Col xs={6} sm={4}>
            {moment.utc(item.lastModifiedAt).local().format('llll')}
          </Col>

          <Col xs={12} sm={4}>
            <Link to={'/item/' + item.id}>
              <IconButton color='inherit' aria-label='Edit'>
                <Edit />
              </IconButton>
            </Link>
            <IconButton 
              color='inherit' 
              aria-label='Edit'
              onClick={() => props.handleItemDelete(item)}>
              <Delete />
            </IconButton>
          </Col>
        </Row>
      </Card>
    </RowWrapper>
  );
}

export default ItemRow;
