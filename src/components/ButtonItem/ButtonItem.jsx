import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ButtonItem extends Component {
  render() {
    return (
      <li>
        <button name={this.props.name} onClick={this.props.onLeaveFeedback}>
          {this.props.text}
        </button>
      </li>
    );
  }
}

ButtonItem.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
