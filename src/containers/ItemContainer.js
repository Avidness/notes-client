import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';

import Loading from '../components/Shared/Loading';
import ItemList from '../components/items/ItemList';
import ItemNew from '../components/items/ItemNew';
import * as ItemActions from '../redux/actions/itemActions';

class ItemContainer extends React.Component {
  componentWillMount(){
    this.props.onFetchItems(this.props.curCategoryId);
  }
  componentWillUpdate(nextProps){
    if(this.props.curCategoryId !== nextProps.curCategoryId){
      this.props.onFetchItems(nextProps.curCategoryId);
    }
  }
  render() {
    return (
      <Fragment>
        
        {this.props.errorMessage !== '' 
          ? <Message error header='An error has occured' content={this.props.errorMessage} /> 
          : null}
        {this.props.loading 
          ? <Loading />
          : null}

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
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items.list,
  openCreation: state.items.openCreation,
  loading: state.items.loading,
  errorMessage: state.items.errorMessage,
  curCategoryId: state.categories.curCategoryId
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
