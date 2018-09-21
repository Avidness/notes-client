import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab }  from '@material-ui/core';
import { Folder } from '@material-ui/icons';
import _ from 'lodash/core';

import Loading from '../components/Loading';
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
    if(this.props.loading){
      return <Loading />;
    }
    return (
      <Tabs 
        id='tab-container'
        onChange={this.handleChange} 
        value={category_id} 
        scrollable>

        {_.map(this.props.categories, function(cat, key) {
          return <Tab 
            key={cat.id}
            value={cat.id}
            label={cat.label}
            icon={<Folder />} />
        })}
      </Tabs>
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
  onUpdateCurCategory: CategoryActions.updateCurCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);