import React from 'react';
import { connect } from 'react-redux';
import ListItem from './list_item';
import {
  addGenre,
  removeGenre }
    from '../../actions/filter_actions';
import {
  addSelected,
  removeSelected }
    from '../../actions/selection_actions';

const msp = (state, ownProps) => {
  const show = ownProps.show;
  return {
    genres: state.filters.genres,
    selected: state.selection[show.watching_status].includes(show.id),
  };
};

const mdp = dispatch => {
  return {
    addSelected: (show) => dispatch(addSelected(show)),
    removeSelected: (show) => dispatch(removeSelected(show)),
    addGenre: (genreName) => dispatch(addGenre(genreName)),
    removeGenre: (genreName) => dispatch(removeGenre(genreName)),
  };
};

export default connect(msp, mdp)(ListItem);
