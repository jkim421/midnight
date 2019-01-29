import React from 'react';
import { connect } from 'react-redux';
import FiltersCheckbox from './filters_checkbox';
import {
  addRating,
  removeRating }
    from '../../actions/filter_actions';

const msp = state => {
  return {
    options: state.filters.ratings,
  };
};

const mdp = dispatch => {
  return {
    addSelection: (rating) => dispatch(addRating(rating)),
    removeSelection: (rating) => dispatch(removeRating(rating)),
  };
};

export default connect(msp, mdp)(FiltersCheckbox);
