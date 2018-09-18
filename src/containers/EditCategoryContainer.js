import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import Loading from '../components/Loading';
import CategoryForm from '../components/CategoryForm';
import * as CategoryActions from '../redux/actions/CategoryActions';

class EditCategoryContainer extends React.Component {
  componentDidMount(){
    var curCategoryId = this.props.curCategoryId;
    this.props.onFetchCategory(curCategoryId);
  }
  render() {
    if(this.props.errorMessage){
      return <Typography color='error'>{this.props.errorMessage}</Typography>
    }
    if(this.props.loading){
      return <Loading />
    }
    if(this.props.category == null){
      return <Loading />
    }
    return (
      <CategoryForm
        category={this.props.category} 
        loading={this.props.loading}
        onSubmit={this.props.onUpdateCategory} />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.categories.loading,
  errorMessage: state.categories.errorMessage,
  curCategoryId: state.categories.curCategoryId,
  category: state.categories.category
});

const mapDispatchToProps = {
  onFetchCategory: CategoryActions.fetchCategory,
  onUpdateCategory: CategoryActions.updateCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCategoryContainer);
