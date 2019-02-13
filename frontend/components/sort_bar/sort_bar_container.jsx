import React from 'react';
import { connect } from 'react-redux';
import SortBar from './sort_bar';
import { updateSort } from '../../actions/filter_actions';
import { toggleSort } from '../../actions/ui_actions';

const msp = state => {
  return {
    sort: state.filters.sort,
    sortOpen: state.ui.header.sortOpen,
  };
};

const mdp = dispatch => {
  return {
    updateSort: (sort) => dispatch(updateSort(sort)),
    toggleSort: () => dispatch(toggleSort()),
  };
};

export default connect(msp, mdp)(SortBar);
