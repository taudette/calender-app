import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Exercise.scss';
import Exercise from './Exercise';

class ExerciseList extends Component {
  render() {
    if (!this.props) {
      return null;
    }

    const exerciseNodes = this.props.data.map(exercise =>
        <Exercise category={exercise.category} key={exercise.id} text={exercise.text} >
          {exercise.text}
        </Exercise>
    );

    return (
      <div className="exerciseList">
       {exerciseNodes}
      </div>
    );
  }
}

ExerciseList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default withStyles(ExerciseList, s);

