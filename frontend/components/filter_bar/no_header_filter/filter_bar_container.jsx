import React from 'react';
import { connect } from 'react-redux';
import FilterBar from './filter_bar';
import { resetGenre } from '../../actions/filter_actions';

const msp = state => {
  return {
    genres: state.filters.genres,
    scores: state.filters.scores,
  };
};

const mdp = dispatch => {
  return {
    resetGenre: () => dispatch(resetGenre()),
  };
};

export default connect(msp, mdp)(FilterBar);
