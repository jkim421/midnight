import React from 'react';
import { connect } from 'react-redux';
import ResultsList from './results_list';
import {
  addSelected,
  removeSelected, }
    from '../../actions/selection_actions';
import { filterAnime } from '../../selectors/show_selectors';

const msp = state => {
  const filters = state.filters;
  const anime = state.entities.animes;

  return {
    shows: filterAnime(anime, filters),
  };
};

const mdp = dispatch => {
  return {
    addSelected: (animeId) => dispatch(addSelected),
    removeSelected: (animeId) => dispatch(removeSelected),
  };
};

export default connect(msp, mdp)(ResultsList);
