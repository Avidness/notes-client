import React from 'react';
import { Button, Icon } from 'semantic-ui-react'

import ItemForm from './ItemForm';

const ItemNew = (props) => {
  return (
    <div>
      {props.openCreation
      ? <ItemForm 
        item={{label: '', description: ''}} 
        cancel={props.cancelCreating}
        onSubmit={props.createItem} />
      : <Button onClick={props.startCreating}>
          <Icon name='edit' /> New Item
        </Button>}
    </div>
  )
}

export default ItemNew;
