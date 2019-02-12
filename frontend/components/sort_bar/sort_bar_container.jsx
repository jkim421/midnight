import React from 'react';
import { connect } from 'react-redux';
import SortBar from './sort_bar';
import { updateSort } from '../../actions/filter_actions';

const msp = state => {
  return {
    sort: state.filters.sort,
  };
};

const mdp = dispatch => {
  return {
    updateSort: (sort) => dispatch(updateSort(sort)),
  };
};

export default connect(msp, mdp)(SortBar);
