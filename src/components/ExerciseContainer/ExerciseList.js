import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Exercise.scss';
import Exercise from './Exercise';

function ExerciseList(){
	return(
		<div className="exerciseList">
			I am an exercise exercise list
			<Exercise category="strength"> This is a strength exercise </Exercise>
			<Exercise category="power"> This is a power exercise </Exercise>
		</div>
	);
}

export default withStyles(ExerciseList, s);