import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab }  from '@material-ui/core';
import FaIcon from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import * as CategoryActions from '../redux/actions/CategoryActions';

class MenuContainer extends React.Component {
  componentDidMount(){
    this.props.onFetchCategories();
  }
  handleChange = (e, val) => {
    this.props.onUpdateCurCategory(val);
  };
  render() {
    let category_id = this.props.curCategoryId;
    if(!category_id){
      return null;
    }
    return (
      <Tabs 
        id='tab-container'
        onChange={this.handleChange} 
        value={category_id} 
        scrollable>

        {this.props.categories.map((x, i) => (
          <Tab 
            key={x.id}
            value={x.id}
            label={x.label}
            icon={<FaIcon icon={faCoffee} size="2x" />} />))}
      </Tabs>
    );
  };
}

const mapStateToProps = state => ({
  categories: state.categories.list,
  curCategoryId: state.categories.curCategoryId
});

const mapDispatchToProps = {
  onFetchCategories: CategoryActions.fetchCategories,
  onUpdateCurCategory: CategoryActions.updateCurCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);