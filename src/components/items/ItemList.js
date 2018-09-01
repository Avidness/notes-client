import React from 'react';

import ItemRow from './ItemRow';

const ItemList = (props) => {
  return (
    <div className="item-list">
      <h2>Items</h2>
      {props.items.map(function (item, i) {
        return <ItemRow key={i} item={item} />
      })}
    </div>
  )
}

export default ItemList;
