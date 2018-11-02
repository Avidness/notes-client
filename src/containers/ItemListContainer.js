import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import Loading from '../components/Loading';
import ItemList from '../components/ItemList/ItemList';
import * as ItemActions from '../redux/actions/ItemActions';

class ItemListContainer extends React.Component {
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
  render() {
    if(this.props.errorMessage){
      return <Typography color='error'>{this.props.errorMessage}</Typography>
    }
    if(this.props.loading){
      return <Loading />
    }
    return (
      <Fragment>
        <ItemList
          items={this.props.items}
          onDeleteItem={this.props.onDeleteItem} />
      </Fragment>
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
  onDeleteItem: ItemActions.deleteItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemListContainer);
