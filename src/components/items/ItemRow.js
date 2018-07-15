import React from 'react';

export const ItemRow = (props) => {
  let item = props.item;
  return (
    <div>
      <span>{item.id} </span>
      <span>{item.label} </span> 
      <span>{item.description}</span> 
      <button onClick={props.startEditing}>
          edit
      </button>
      <button onClick={props.deleteItem}>
          delete
      </button>
      <br />
      <br />
    </div>
  );
}


export default ItemRow;
