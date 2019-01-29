import React from 'react';
import { connect } from 'react-redux';
import RatingsCheckbox from './ratings_checkbox';
import {
  addRating,
  removeRating }
    from '../../actions/filter_actions';

const msp = state => {
  return {
    ratings: state.filters.ratings,
  };
};

const mdp = dispatch => {
  return {
    addRating: (rating) => dispatch(addRating(rating)),
    removeRating: (rating) => dispatch(removeRating(rating)),
  };
};

export default connect(msp, mdp)(RatingsCheckbox);
