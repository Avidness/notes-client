import React from 'react';
import { connect } from 'react-redux';

import { fetchItems } from '../../redux/actions/itemActions';

import ItemRow from './ItemRow';

class ItemList extends React.Component {
  componentDidMount(){
    this.props.onFetchItems();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.items.new) {
      this.props.items.list.unshift(nextProps.items.new);
    }
  }
  render() {
    var itemRows = this.props.items.list.map(function (item) {
      return ( <ItemRow key={item.id} item={item} /> );
    });
    return (
      <div className="item-list">
        {itemRows}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = {
  onFetchItems: fetchItems
}

export default connect(mapStateToProps, mapDispatchToProps )(ItemList);
