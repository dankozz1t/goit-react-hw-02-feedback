import React, { Component } from 'react';
import s from './ButtonList.module.css';

export default class ButtonList extends Component {
  render() {
    return <ul className={s.list}>{this.props.children}</ul>;
  }
}
