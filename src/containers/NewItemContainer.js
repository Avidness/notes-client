import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import Loading from '../components/Loading';
import ItemForm from '../components/ItemList/ItemForm';
import * as ItemActions from '../redux/actions/ItemActions';

class NewItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onCreate = this.onCreate.bind(this);

    this.state = {
      item: {
        label: '',
        description: '',
        category: {
          id: 1
        }
      }
    };
  }
  onCreate(item){
    this.props.onCreateItem(item);
    this.props.history.push('/')
  }
  render() {
    if(this.props.errorMessage){
      return <Typography color='error'>{this.props.errorMessage}</Typography>
    }
    if(this.props.loading){
      return <Loading />
    }
    return (
      <ItemForm
        item={this.state.item} 
        loading={this.props.loading}
        categories={this.props.categories} 
        onSubmit={this.onCreate} />
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.list
});

const mapDispatchToProps = {
  onCreateItem: ItemActions.createItem
}

export default connect(mapStateToProps, mapDispatchToProps)(NewItemContainer);
