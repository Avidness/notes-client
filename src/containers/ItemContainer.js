import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'

import ItemList from '../components/items/ItemList';
import ItemNew from '../components/items/ItemNew';
import * as ItemActions from '../redux/actions/itemActions';

class ItemContainer extends React.Component {
  componentDidMount(){
    this.props.onFetchItems();
  }
  render() {
    return (
      <Container>
        <ItemNew
          openCreation={this.props.openCreation} 
          createItem={this.props.onCreateItem}
          startCreating={this.props.onStartCreating}
          cancelCreating={this.props.onCancelCreating}
          />
        <ItemList 
          items={this.props.items} 
          updateItem={this.props.onUpdateItem}
          deleteItem = {this.props.onDeleteItem}
          startEditing={this.props.onStartEditing}
          cancelEditing={this.props.onCancelEditing}
          />
      </Container>
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
