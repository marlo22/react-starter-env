import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem } from '../actions/items';

/*  eslint-disable react/prop-types */
class Greeting extends Component {
  constructor() {
    super();

    this.state = {
      itemToAdd: '',
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    this.props.addItem(this.state.itemToAdd);
    this.setState({ itemToAdd: '' });
  }

  render() {
    return (
      <Fragment>
        <ul className="items-list">
          {this.props.items.map((item, i) => (
            <li key={item}>
              {item}
              <button onClick={() => this.props.removeItem(i)}>Remove</button>
            </li>
          ))}
        </ul>
        <input type="text" onChange={e => this.setState({ itemToAdd: e.target.value })} />
        <button onClick={this.addItem}>Add item</button>
      </Fragment>
    );
  }
}

const mapStoreToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: id => dispatch(removeItem(id)),
});

export default connect(
  mapStoreToProps,
  mapDispatchToProps,
)(Greeting);
