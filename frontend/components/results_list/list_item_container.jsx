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
import { startList, endList } from '../../actions/ui_actions';

const msp = (state, ownProps) => {
  const show = ownProps.show;
  return {
    genres: state.filters.genres,
    selected: state.selection.includes(show.id),
  };
};

const mdp = dispatch => {
  return {
    addSelected: (show) => dispatch(addSelected(show)),
    removeSelected: (show) => dispatch(removeSelected(show)),
    addGenre: (genreName) => dispatch(addGenre(genreName)),
    removeGenre: (genreName) => dispatch(removeGenre(genreName)),
    startList: () => dispatch(startList()),
    endList: () => dispatch(endList()),
  };
};

export default connect(msp, mdp)(ListItem);
