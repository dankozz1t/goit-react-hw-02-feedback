import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonList from '../ButtonList';
import ButtonItem from '../ButtonItem';
import Section from 'components/Section';

export default class FeedbackOption extends Component {
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <Section title="Please leave feedback">
        <ButtonList>
          {options.map(btn => (
            <ButtonItem
              key={btn}
              text={this.capitalizeFirstLetter(btn)}
              name={btn}
              onLeaveFeedback={onLeaveFeedback}
            />
          ))}
        </ButtonList>
      </Section>
    );
  }
}

FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
