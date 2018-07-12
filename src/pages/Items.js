import React from 'react';
import { connect } from 'react-redux';

import ItemList from '../components/items/ItemList';
import ItemForm from '../components/items/ItemForm';

import { createItem } from '../redux/actions/itemActions';

class Items extends React.Component {
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
    return (
      <div className="item-page">
        <button onClick={() => this.handleOpen()}>
          New Item
        </button>

        {this.state.openForm 
          ? <ItemForm 
              item={{}}
              handleClose={this.handleClose}
              handleSubmit={this.props.onCreateItem}  />
          : null}
        
        <ItemList />
      </div>
    );
  }
}

const mapDispatchToProps = {
  onCreateItem: createItem
}

export default connect(null, mapDispatchToProps)(Items);
