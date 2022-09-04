import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from 'components/Section';
import s from './Statistics.module.css';

export default class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <Section title="Statistics">
        <ul className={s.list}>
          <li className={`${s.item} ${s.good}`}>Good: {good}</li>
          <li className={`${s.item} ${s.neutral}`}> Neutral: {neutral}</li>
          <li className={`${s.item} ${s.bad}`}> Bad: {bad}</li>
          <li className={`${s.item} ${s.total}`}> Total: {total}</li>
          <li className={`${s.item} ${s.percent}`}>
            Positive feedback: {positivePercentage ? positivePercentage : 0} %
          </li>
        </ul>
      </Section>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
