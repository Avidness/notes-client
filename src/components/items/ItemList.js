import React from 'react';
import { connect } from 'react-redux';

import { fetchItems } from '../../redux/actions/itemActions';

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
      return (
        <div key={item.id}>
          <strong>{item.title}</strong>
          <br/> 
          <p>{item.body}</p>
        </div>
      );
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

const mapActionsToProps = {
  onFetchItems: fetchItems
}

export default connect(mapStateToProps, mapActionsToProps)(ItemList);
