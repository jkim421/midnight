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
    
  };
};

export default connect(msp, mdp)(TypesCheckbox);
