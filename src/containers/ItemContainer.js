import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import Loading from '../components/Shared/Loading';
import ItemForm from '../components/items/ItemForm';
import * as ItemActions from '../redux/actions/ItemActions';

class ItemContainer extends React.Component {
  componentWillMount(){
    var itemid = this.props.match.params.itemid;
    this.props.onFetchItem(itemid);
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
        <ItemForm
          item={this.props.item} 
          loading={this.props.loading}
          categories={this.props.categories} 
          onSubmit={this.props.onUpdateItem} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  item: state.items.item,
  loading: state.items.loading,
  errorMessage: state.items.errorMessage,
  categories: state.categories.list
});

const mapDispatchToProps = {
  onFetchItem: ItemActions.fetchItem,
  onUpdateItem: ItemActions.updateItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
