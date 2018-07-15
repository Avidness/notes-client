import React from 'react';
import { connect } from 'react-redux';

import ItemList from '../components/items/ItemList';
import * as ItemActions from '../redux/actions/itemActions';

class ItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openForm: false
    };
  }
  componentDidMount(){
    this.props.onFetchItems();
  }
  createItem = (item) => {
    this.props.onCreateItem(item)
  }
  startEditing = (id) => {
    this.props.onStartEditing(id)
  }
  cancelEditing = (id) => {
    this.props.onCancelEditing(id)
  }
  updateItem = (item) => {
    this.props.onUpdateItem(item)
  }
  deleteItem = (item) => {
    this.props.onDeleteItem(item)
  }
  render() {
    return (
      <div className="item-page">
        <ItemList 
          items={this.props.items} 
          createItem={this.createItem}
          startEditing={this.startEditing}
          cancelEditing={this.cancelEditing}
          updateItem={this.updateItem}
          deleteItem = {this.deleteItem}
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
