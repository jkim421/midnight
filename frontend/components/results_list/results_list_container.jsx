import React from 'react';
import { connect } from 'react-redux';
import ResultsList from './results_list';
import {
  addSelected,
  removeSelected, }
    from '../../actions/selection_actions';
import { filterAnime } from '../../selectors/show_selectors';

const msp = state => {
  const { categories, genres } = state.filters;
  const anime = state.entities.animes;

  return {
    categories,
    genres,
    shows: filterAnime(anime, categories, genres),
  };
};

const mdp = dispatch => {
  return {
    addSelected: (animeId) => dispatch(addSelected),
    removeSelected: (animeId) => dispatch(removeSelected),
  };
};

export default connect(msp, mdp)(ResultsList);
