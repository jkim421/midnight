import React from 'react';
import { connect } from 'react-redux';
import TypesCheckbox from './types_checkbox';
import {
  addType,
  removeType }
    from '../../actions/filter_actions';

const msp = state => {
  return {
    types: state.filters.types,
  };
};

const mdp = dispatch => {
  return {
    addType: (type) => dispatch(addType(type)),
    removeType: (type) => dispatch(removeType(type)),
  };
};

export default connect(msp, mdp)(TypesCheckbox);
