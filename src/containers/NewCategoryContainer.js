import React from 'react';
import { connect } from 'react-redux';

import CategoryForm from '../components/CategoryForm';
import * as CategoryActions from '../redux/actions/CategoryActions';

class NewCategoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onCreate = this.onCreate.bind(this);
  }
  onCreate(item){
    this.props.onCreateCategory(item);
    this.props.history.push('/');
  }
  render() {
    return (
      <CategoryForm
        category={this.props.category} 
        loading={this.props.loading}
        onSubmit={this.onCreate} />
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
