import React, { Component } from 'react';

export default class ButtonList extends Component {
  render() {
    return <ul>{this.props.children}</ul>;
  }
}
