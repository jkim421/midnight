import React from 'react';
import { connect } from 'react-redux';
import FilterBar from './filter_bar';
import {
  addCategory,
  removeCategory,
  addGenre,
  removeGenre }
    from '../../actions/filter_actions';

const msp = state => {
  return {
    categories: state.filters.categories,
    genres: state.filters.genres,
    scores: state.filters.scores,
  };
};

const mdp = dispatch => {
  return {
    addCategory: (categoryId) => dispatch(addCategory(categoryId)),
    removeCategory: (categoryId) => dispatch(removeCategory(categoryId)),
    addGenre: (genreId) => dispatch(addGenre(genreId)),
    removeGenre: (genreId) => dispatch(removeGenre(genreId)),
  };
};

export default connect(msp, mdp)(FilterBar);
