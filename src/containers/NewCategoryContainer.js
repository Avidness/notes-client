import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import Loading from '../components/Loading';
import CategoryForm from '../components/CategoryForm';
import * as CategoryActions from '../redux/actions/CategoryActions';

class NewCategoryContainer extends React.Component {
  render() {
    if(this.props.errorMessage){
      return <Typography color='error'>{this.props.errorMessage}</Typography>
    }
    if(this.props.loading){
      return <Loading />
    }
    return (
      <CategoryForm
        category={this.props.category} 
        loading={this.props.loading}
        onSubmit={this.props.onCreateCategory} />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.categories.loading,
  errorMessage: state.categories.errorMessage
});

const mapDispatchToProps = {
  onCreateCategory: CategoryActions.createCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCategoryContainer);
