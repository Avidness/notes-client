import React, { Component } from 'react';

class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      label: '',
      description: ''
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount(){
    if(this.props.item){
      this.setState({id: this.props.item.id});
      this.setState({label: this.props.item.label});
      this.setState({description: this.props.item.description});
    }
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <div>
        <h1>Add Item</h1>
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
              value={this.state.description} />
          </div>
          <br />
          <button onClick={() => 
            this.props.handleSubmit({
              id: this.state.id,
              label: this.state.label,
              description: this.state.description
            })}>
            Submit
          </button>
          <button onClick={() => this.props.handleClose}>Cancel</button>
      </div>
    );
  }
}

export default ItemForm;
