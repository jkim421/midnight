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
    categories: state.ui.categories,
    shows: {
      1: anime.watching,
      2: anime.completed,
      3: anime.onHold,
      4: anime.dropped,
      6: anime.planToWatch,
    }
  };
};

const mdp = dispatch => {
  return {
    addSelected: (animeId) => dispatch(addSelected),
    removeSelected: (animeId) => dispatch(removeSelected),
  };
};

export default connect(msp, mdp)(ResultsList);
