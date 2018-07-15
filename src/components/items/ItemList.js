import React from 'react';

import ItemRow from './ItemRow';
import ItemForm from './ItemForm';

const ItemList = (props) => {
  return (
    <div className="item-list">
      <h2>Items</h2>
      {props.items.list.map(function (item, i) {
        return (!item.editing 
          ? <ItemRow key={i} 
              item={item}
              startEditing={() => props.startEditing(item.id)}
              deleteItem={() => props.deleteItem(item)} /> 
          : <ItemForm key={i} 
              item={item} 
              cancelEditing={() => props.cancelEditing(item.id)}
              updateItem={() => props.updateItem(item)} /> )})
      }
    </div>
  )
}

export default ItemList;
