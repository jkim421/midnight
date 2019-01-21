import React from 'react';
import { connect } from 'react-redux';
import ResultsList from './results_list';
import {
  addToList, addToSelected, addToScratched }
    from '../../actions/filter_actions';

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
    addToList: (animeId) => dispatch(addToList),
    addToSelected: (animeId) => dispatch(addToSelected),
    addToScratched: (animeId) => dispatch(addToScratched),
  };
};

export default connect(null, mdp)(ResultsList);
