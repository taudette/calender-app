/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Exercise.scss';
import ExerciseList from './ExerciseList';
import ExerciseForm from './ExerciseForm';

class ExerciseContainer extends Component {
  render() {
    if (!this.props.data) {
      return null;
    }
    return (
      <div className={s.container}>
        <h1>Exercises</h1>
        <ExerciseList data={this.props.data} />
        <ExerciseForm />
      </div>
    );
  }
}

ExerciseContainer.propTypes = { data: PropTypes.array.isRequired };

export default withStyles(ExerciseContainer, s);
