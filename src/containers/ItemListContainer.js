import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import Loading from '../components/Loading';
import SortableItemList from '../components/Items/SortableItemList';
import * as ItemActions from '../redux/actions/ItemActions';

class ItemListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleReorder = this.handleReorder.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  componentDidMount(){
    if(this.props.curCategoryId !== ''){
      this.props.onFetchItems(this.props.curCategoryId);
    }
  }
  componentDidUpdate(prevProps){
    if(this.props.curCategoryId !== prevProps.curCategoryId){
      this.props.onFetchItems(this.props.curCategoryId);
    }
  }
  handleReorder(list, oldIndex, newIndex){
    this.props.onUpdateOrdering(list[oldIndex], oldIndex, newIndex)
    
    const ordered_list = Array.from(list);
    const [removed] = ordered_list.splice(oldIndex, 1);
    ordered_list.splice(newIndex, 0, removed);
    
    this.props.onUpdateItemList(ordered_list);
  }
  handleItemDelete(item){
    if(window.confirm("Are you sure you want to delete this item?")){
      this.props.onDeleteItem(item);
    }
  }
  
  render() {
    if(this.props.errorMessage){
      return <Typography color='error'>{this.props.errorMessage}</Typography>
    }
    if(this.props.loading){
      return <Loading />
    }
    let items = this.props.items;
    return (
      <SortableItemList 
        items={items} 
        handleItemDelete={this.handleItemDelete}
        handleReorder={this.handleReorder} />
    );
  }
}

const mapStateToProps = state => ({
  items: state.items.list,
  loading: state.items.loading,
  errorMessage: state.items.errorMessage,
  categories: state.categories.list,
  curCategoryId: state.categories.curCategoryId
});

const mapDispatchToProps = {
  onFetchItems: ItemActions.fetchItems,
  onDeleteItem: ItemActions.deleteItem,
  onUpdateItemList: ItemActions.updateItemList,
  onUpdateOrdering: ItemActions.updateOrdering
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemListContainer);
