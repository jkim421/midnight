import React from 'react';
import { connect } from 'react-redux';
import ScoresSlider from './scores_slider';

import {
  updateLowScore,
  updateHiScore }
    from '../../actions/filter_actions';

const msp = state => {
  return {
    scores: state.filters.scores,
  };
};

const mdp = dispatch => {
  return {
    updateLowScore: (score) => dispatch(updateLowScore(score)),
    updateHiScore: (score) => dispatch(updateHiScore(score)),
  };
};

export default connect(msp, mdp)(ScoresSlider);
