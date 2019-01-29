import React from 'react';
import { connect } from 'react-redux';
import FiltersCheckbox from './filters_checkbox';
import {
  addType,
  removeType }
    from '../../actions/filter_actions';

const msp = state => {
  return {
    options: state.filters.types,
  };
};

const mdp = dispatch => {
  return {
    addSelection: (type) => dispatch(addType(type)),
    removeSelection: (type) => dispatch(removeType(type)),
  };
};

export default connect(msp, mdp)(FiltersCheckbox);
