import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createItem } from '../../redux/actions/itemActions';

class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      description: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const new_item = {
      label: this.state.label,
      description: this.state.description
    };

    this.props.createItem(new_item);
  }

  render() {
    return (
      <div>
        <h1>Add Item</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Label: </label>
            <br />
            <input
              type="text"
              name="label"
              onChange={this.onChange}
              value={this.state.label}
            />
          </div>
          <br />
          <div>
            <label>Description: </label>
            <br />
            <textarea
              name="description"
              onChange={this.onChange}
              value={this.state.description}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

ItemForm.propTypes = {
  createItem: PropTypes.func.isRequired
};

export default connect(null, { createItem })(ItemForm);
