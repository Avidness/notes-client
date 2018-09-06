import React, { Fragment } from 'react';
import ItemRow from './ItemRow';

const ItemList = (props) => {
  return (
    <Fragment>
      {props.items.map(function (item, i) {
        return <ItemRow key={i} 
                  item={item}
                  onDeleteItem={props.onDeleteItem} />
      })}
    </Fragment>
  );
}

export default ItemList;
