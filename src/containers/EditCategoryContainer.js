import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import Loading from '../components/Loading';
import CategoryForm from '../components/CategoryForm';
import * as CategoryActions from '../redux/actions/CategoryActions';

class EditCategoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }
  componentDidMount(){
    var curCategoryId = this.props.curCategoryId;
    this.props.onFetchCategory(curCategoryId);
  }
  onDelete(item){
    this.props.onDeleteCategory(item);
    this.props.history.push('/')
  }
  onUpdate(item){
    this.props.onUpdateCategory(item);
    this.props.history.push('/')
  }
  render() {
    var curCategoryId = this.props.curCategoryId;
    if(this.props.errorMessage){
      return <Typography color='error'>{this.props.errorMessage}</Typography>
    }
    if(this.props.loading){
      return <Loading />
    }
    if(this.props.categories[curCategoryId] == null){
      return <Loading />
    }
    return (
      <CategoryForm
        category={this.props.categories[curCategoryId]} 
        loading={this.props.loading}
        onSubmit={this.onUpdate} 
        onDelete={this.onDelete} />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.categories.loading,
  errorMessage: state.categories.errorMessage,
  curCategoryId: state.categories.curCategoryId,
  categories: state.categories.list
});

const mapDispatchToProps = {
  onFetchCategory: CategoryActions.fetchCategory,
  onUpdateCategory: CategoryActions.updateCategory,
  onDeleteCategory: CategoryActions.deleteCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCategoryContainer);
