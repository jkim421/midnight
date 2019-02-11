import React from 'react';
import { connect } from 'react-redux';
import GenresBox from './genres_box';
import {
  addGenre,
  removeGenre }
    from '../../actions/filter_actions';

const msp = state => {
  return {
    categories: state.filters.genres,
  };
};

const mdp = dispatch => {
  return {
    addGenre: (genreId) => dispatch(addGenre(genreId)),
    removeGenre: (genreId) => dispatch(removeGenre(genreId)),
  };
};

export default connect(msp, mdp)(GenresBox);
