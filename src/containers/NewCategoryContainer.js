import React from 'react';
import { connect } from 'react-redux';

import CategoryForm from '../components/CategoryForm';
import * as CategoryActions from '../redux/actions/CategoryActions';

class NewCategoryContainer extends React.Component {
  render() {
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
