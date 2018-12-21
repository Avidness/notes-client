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
  onDelete(item){
    this.props.onDeleteCategory(item);
    this.props.history.push('/');
  }
  onUpdate(item){
    this.props.onUpdateCategory(item);
    this.props.history.push('/');
  }
  render() {
    let cat_id = this.props.match.params.catid;
    if(this.props.errorMessage){
      return <Typography color='error'>{this.props.errorMessage}</Typography>
    }
    if(this.props.categories
      && this.props.categories[cat_id] === undefined){
      return <Typography color='error'>Category Id not found</Typography>
    }
    if(this.props.loading
      || this.props.categories === null 
      || this.props.categories[cat_id] === null){
      return <Loading />
    }
    return (
      <CategoryForm
        category={this.props.categories[cat_id]} 
        loading={this.props.loading}
        onSubmit={this.onUpdate} 
        onDelete={this.onDelete} />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.categories.loading,
  errorMessage: state.categories.errorMessage,
  categories: state.categories.list
});

const mapDispatchToProps = {
  onUpdateCategory: CategoryActions.updateCategory,
  onDeleteCategory: CategoryActions.deleteCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCategoryContainer);
