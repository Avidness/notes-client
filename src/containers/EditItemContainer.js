import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import Loading from '../components/Loading';
import ItemForm from '../components/ItemForm';
import * as ItemActions from '../redux/actions/ItemActions';

class EditItemContainer extends React.Component {
  constructor(props) {
    super(props);
    var id = this.props.match.params.itemid;
    if(this.props.items === null 
      || this.props.items[id] === null){
      this.props.onFetchItem(id);
    }
  }
  render() {
    var id = this.props.match.params.itemid;
    if(this.props.errorMessage){
      return <Typography color='error'>{this.props.errorMessage}</Typography>
    }
    if(this.props.loading){
      return <Loading />
    }
    if(this.props.items[id] === null){
      return <Loading />
    }
    let item = this.props.items[id];
    return (
      <ItemForm
        item={item} 
        loading={this.props.loading}
        categories={this.props.categories} 
        onSubmit={this.props.onUpdateItem} />
    );
  }
}

const mapStateToProps = state => ({
  items: state.items.list,
  loading: state.items.loading,
  errorMessage: state.items.errorMessage,
  categories: state.categories.list
});

const mapDispatchToProps = {
  onFetchItem: ItemActions.fetchItem,
  onUpdateItem: ItemActions.updateItem
}

export default connect(mapStateToProps, mapDispatchToProps)(EditItemContainer);
