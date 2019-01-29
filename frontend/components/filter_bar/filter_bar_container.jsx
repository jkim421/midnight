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
  };
};

const mdp = dispatch => {
  return {
    addCategory: (categoryId) => dispatch(addCategory),
    removeCategory: (categoryId) => dispatch(removeCategory),
    addGenre: (genreId) => dispatch(addGenre),
    removeGenre: (genreId) => dispatch(removeGenre),
  };
};

export default connect(msp, mdp)(FilterBar);
