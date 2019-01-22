import React from 'react';
import { connect } from 'react-redux';
import ResultsList from './results_list';
import {
  addSelected,
  removeSelected, }
    from '../../actions/selection_actions';

const msp = state => {
  const anime = state.entities.animes;
  return {
    completed: anime.completed,
    dropped: anime.dropped,
    onHold: anime.onHold,
    planToWatch: anime.planToWatch,
    watching: anime.watching,
  };
};

const mdp = dispatch => {
  return {
    addSelected: (animeId) => dispatch(addSelected),
    removeSelected: (animeId) => dispatch(removeSelected),
  };
};

export default connect(null, mdp)(ResultsList);
