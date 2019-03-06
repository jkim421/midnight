import React from 'react';
import { connect } from 'react-redux';
import FilterBar from './filter_bar';
import {
  resetSelection,
  resetGenre } from '../../actions/filter_actions';
import { toggleFilter } from '../../actions/ui_actions';

const msp = state => {
  return {
    genres: state.filters.genres,
    scores: state.filters.scores,
    filterOpen: state.ui.header.filterOpen,
  };
};

const mdp = dispatch => {
  return {
    resetSelection: () => dispatch(resetSelection()),
    resetGenre: () => dispatch(resetGenre()),
    toggleFilter: () => dispatch(toggleFilter()),
  };
};

export default connect(msp, mdp)(FilterBar);
