import React from 'react';
import { connect } from 'react-redux';
import GenreCheckbox from './genre_checkbox';
import {
  addGenre,
  removeGenre }
    from '../../actions/filter_actions';

const msp = state => {
  return {
    genres: state.filters.genres,
  };
};

const mdp = dispatch => {
  return {
    addGenre: (genreName) => dispatch(addGenre(genreName)),
    removeGenre: (genreName) => dispatch(removeGenre(genreName)),
  };
};

export default connect(msp, mdp)(GenreCheckbox);
