import React, { Fragment } from 'react';
import _ from 'lodash/core';
import ItemRow from './ItemRow';

const ItemList = (props) => {
  return (
    <Fragment>
      {_.map(props.items, function(item, key) {
        return <ItemRow key={key} 
          item={item}
          onDeleteItem={props.onDeleteItem} />
      })}
    </Fragment>
  );
}

export default ItemList;