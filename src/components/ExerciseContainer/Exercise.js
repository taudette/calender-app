
import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Exercise.scss';

class Exercise extends Component {
  render() {
    return (
		<div className="exercise">
			<h2 className="category">
				{this.props.category}
			</h2>
			{this.props.children}
		</div>
	);
  }
}

export default withStyles(Exercise, s);
