import React from 'react';

import ItemForm from './ItemForm';

const ItemNew = (props) => {
  return (
    <div>
      {props.openCreation
      ? <ItemForm 
        item={{label: '', description: ''}} 
        cancel={props.cancelCreating}
        onSubmit={props.createItem} />
      : <button onClick={props.startCreating}>new item</button>}
    </div>
  )
}

export default ItemNew;
