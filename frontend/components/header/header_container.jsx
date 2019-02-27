import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import {
  toggleFilter,
  toggleSort } from '../../actions/ui_actions';

import { filterAnime } from '../../selectors/show_selectors';

const msp = (state, ownProps) => {
  const usernameParam = ownProps.match.params.username;
  const filters = state.filters;
  const selection = state.selection;
  const anime = state.entities.animes;
  debugger
  return {
    filterOpen: state.ui.header.filterOpen,
    sortOpen: state.ui.header.sortOpen,
    usernameParam,
    showNum: filterAnime(anime, filters, selection).length,
  };
};

const mdp = dispatch => {
  return {
    toggleFilter: () => dispatch(toggleFilter()),
    toggleSort: () => dispatch(toggleSort()),
  };
};

export default connect(msp, mdp)(Header);
