import React from 'react';
import { connect } from 'react-redux';

import { deleteItem, updateItem } from '../../redux/actions/itemActions';
import ItemForm from './ItemForm';

class ItemRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      openForm: false
    };
  }
  handleOpen(){
    this.setState({ openForm: true });
  }
  handleClose(){
    this.setState({ openForm: false });
  }
  render() {
    let item = this.props.item;
    return (
      <div>
        <span>{item.id} </span>
        <span>{item.label} </span> 
        <span>{item.description} </span> 
        <button onClick={() => this.props.onUpdateItem(item)}>update</button>
        <button onClick={() => this.props.onDeleteItem(item)}>delete</button>
        {this.state.openForm 
          ? <ItemForm 
              item={item}
              handleClose={this.handleClose}
              handleSubmit={this.props.onUpdateItem} />
          : null}
        <button onClick={() => this.handleOpen()}>
          Update Item
        </button>
        <br />
        <br />
      </div>
    );
  }
}

const mapDispatchToProps = {
  onDeleteItem: deleteItem,
  onUpdateItem: updateItem
}

export default connect(null, mapDispatchToProps)(ItemRow);
