import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import Loading from '../components/Loading';
import ItemList from '../components/ItemList/ItemList';
import * as ItemListActions from '../redux/actions/ItemListActions';

class ItemListContainer extends React.Component {
  componentWillMount(){
    this.props.onFetchItems(this.props.curCategoryId);
  }
  componentWillUpdate(nextProps){
    if(this.props.curCategoryId !== nextProps.curCategoryId){
      this.props.onFetchItems(nextProps.curCategoryId);
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
        <ItemList items={this.props.items} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  items: state.itemList.list,
  loading: state.itemList.loading,
  errorMessage: state.itemList.errorMessage,
  categories: state.categories.list,
  curCategoryId: state.categories.curCategoryId
});

const mapDispatchToProps = {
  onFetchItems: ItemListActions.fetchItems,
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemListContainer);
