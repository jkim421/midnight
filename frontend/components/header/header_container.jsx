import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import {
  toggleFilter,
  toggleSort } from '../../actions/ui_actions';

const msp = state => {
  return {
    filterOpen: state.ui.header.filterOpen,
    sortOpen: state.ui.header.sortOpen,
  };
};

const mdp = dispatch => {
  return {
    toggleFilter: () => dispatch(toggleFilter()),
    toggleSort: () => dispatch(toggleSort()),
  };
};

export default connect(msp, mdp)(Header);
