
import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Exercise.scss';

class Exercise extends Component {
  render() {
    if (!this.props) {
      return null;
    }
    return (
      <div className="exercise">
        <h2 className="category">{this.props.category}</h2>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

Exercise.propTypes = {
  category: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};


export default withStyles(Exercise, s);

