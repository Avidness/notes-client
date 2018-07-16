import React from 'react';

import ItemRow from './ItemRow';
import ItemForm from './ItemForm';

const ItemList = (props) => {
  return (
    <div className="item-list">
      <h2>Items</h2>
      {props.items.map(function (item, i) {
        return (!item.editing 
          ? <ItemRow key={i} 
              item={item}
              startEditing={() => props.startEditing(item.id)}
              deleteItem={() => props.deleteItem(item)} /> 
          : <ItemForm key={i} 
              item={item} 
              cancel={() => props.cancelEditing(item.id)}
              onSubmit={props.updateItem} /> )})
      }
    </div>
  )
}

export default ItemList;
