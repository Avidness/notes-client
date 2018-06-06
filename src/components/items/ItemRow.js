import React from 'react';
import { connect } from 'react-redux';

import { deleteItem } from '../../redux/actions/itemActions';

class ItemRow extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.item.id} </span>
        <span>{this.props.item.label} </span> 
        <span>{this.props.item.description} </span> 
        <button onClick={() => this.props.onDeleteItem(this.props.item)}>delete</button>
        <br />
        <br />
      </div>
    );
  }
}

const mapDispatchToProps = {
  onDeleteItem: deleteItem
}

export default connect(null, mapDispatchToProps)(ItemRow);
