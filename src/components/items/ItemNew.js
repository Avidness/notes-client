import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';

import ItemForm from './ItemForm';

const ItemNew = (props) => {
  return (
    <Fragment>
      {props.openCreation
      ? <ItemForm 
          item={{label: '', description: '', category: 1}} 
          categories={props.categories} 
          cancel={props.cancelCreating}
          onSubmit={props.createItem} />
      : <Button onClick={props.startCreating}>
          New Item
        </Button>}
    </Fragment>
  )
}

export default ItemNew;
