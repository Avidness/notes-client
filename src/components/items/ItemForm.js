import React from 'react';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      item: {}
    };
  }
  componentDidMount(){
    this.setState({ item: this.props.item });
  }
  onChange(e) {
    let edited_item = this.state.item;
    edited_item[e.target.name] = e.target.value;
    this.setState({ item: edited_item});
  }
  render(){
    return (
      <div>
        <input
          type="text"
          name="label"
          onChange={this.onChange}
          defaultValue={this.props.item.label} />
        <textarea
          name="description"
          onChange={this.onChange}
          defaultValue={this.props.item.description} />
        <button onClick={() => this.props.onSubmit(this.state.item)}>
            save
        </button>
        <button onClick={this.props.cancel}>
            cancel
        </button>
      </div>
    );
  }
}

export default ItemForm;
