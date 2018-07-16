import React from 'react';
import { connect } from 'react-redux';

import ItemList from '../components/items/ItemList';
import * as ItemActions from '../redux/actions/itemActions';

class ItemContainer extends React.Component {
  componentDidMount(){
    this.props.onFetchItems();
  }
  render() {
    return (
      <div className="item-page">
        <ItemList 
          items={this.props.items} 
          createItem={this.props.onCreateItem}
          startEditing={this.props.onStartEditing}
          cancelEditing={this.props.onCancelEditing}
          updateItem={this.props.onUpdateItem}
          deleteItem = {this.props.onDeleteItem}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = {
  onFetchItems: ItemActions.fetchItems,
  onCreateItem: ItemActions.createItem,
  onStartEditing: ItemActions.startEditing,
  onCancelEditing: ItemActions.cancelEditing,
  onUpdateItem: ItemActions.updateItem,
  onDeleteItem: ItemActions.deleteItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
