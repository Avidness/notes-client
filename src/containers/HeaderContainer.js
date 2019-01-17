import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Loading from '../components/Loading';
import * as CategoryActions from '../redux/actions/CategoryActions';

class MenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
  }
  componentDidMount(){
    this.props.onFetchCategories();
  }
  handleCategoryChange = (e, val) => {
    this.props.onUpdateCurCategory(val);
  };
  handleDeleteCategory = () => {
    if(window.confirm("Are you sure you want to delete this category?")){
      let category = this.props.categories[this.props.curCategoryId];
      this.props.onDeleteCategory(category);
    }
  };
  render() {
    if(this.props.loading){
      return <Loading />
    }
    return (
      <Header 
        categories={this.props.categories}
        handleCategoryChange={this.handleCategoryChange} 
        handleDeleteCategory={this.handleDeleteCategory} 
        selectedCategoryId={this.props.curCategoryId} />
    );
  };
}

const mapStateToProps = state => ({
  loading: state.categories.loading,
  categories: state.categories.list,
  curCategoryId: state.categories.curCategoryId
});

const mapDispatchToProps = {
  onFetchCategories: CategoryActions.fetchCategories,
  onUpdateCurCategory: CategoryActions.updateCurCategory,
  onDeleteCategory: CategoryActions.deleteCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);