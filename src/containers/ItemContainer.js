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
          openCreation={this.props.openCreation} 
          createItem={this.props.onCreateItem}
          updateItem={this.props.onUpdateItem}
          deleteItem = {this.props.onDeleteItem}
          startEditing={this.props.onStartEditing}
          cancelEditing={this.props.onCancelEditing}
          startCreating={this.props.onStartCreating}
          cancelCreating={this.props.onCancelCreating}
          />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items.list,
  openCreation: state.items.openCreation
});

const mapDispatchToProps = {
  onFetchItems: ItemActions.fetchItems,
  onCreateItem: ItemActions.createItem,
  onUpdateItem: ItemActions.updateItem,
  onDeleteItem: ItemActions.deleteItem,
  onStartEditing: ItemActions.startEditing,
  onCancelEditing: ItemActions.cancelEditing,
  onStartCreating: ItemActions.startCreating,
  onCancelCreating: ItemActions.cancelCreating
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
