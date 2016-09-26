import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Exercise.scss';
import Exercise from './Exercise';

class ExerciseList extends Component {

  render() {

    const exerciseNodes = this.props.data.map((exercise) => {
      return <Exercise category={exercise.category} key={exercise.id} text={exercise.text} >
      	{exercise.text}
      	</Exercise>
    });

    return (
      <div className="exerciseList">
     	{exerciseNodes}
      </div>
    );
  }
};

export default withStyles(ExerciseList, s);

