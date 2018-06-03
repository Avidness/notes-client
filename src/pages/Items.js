import React from 'react';

import ItemList from '../components/items/ItemList'
import ItemForm from '../components/items/ItemForm'

class Items extends React.Component {
  render() {
    return (
      <div className="item-page">
        <ItemForm />
        <ItemList />
      </div>
    );
  }
}

export default Items;
