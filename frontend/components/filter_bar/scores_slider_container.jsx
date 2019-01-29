import React from 'react';
import { connect } from 'react-redux';
import ScoresSlider from './scores_slider';

import { updateScores } from '../../actions/filter_actions';

const msp = state => {
  return {
    scores: state.filters.scores,
  };
};

const mdp = dispatch => {
  return {
    updateScores: (scores) => dispatch(updateScores(scores)),
  };
};

export default connect(msp, mdp)(ScoresSlider);
