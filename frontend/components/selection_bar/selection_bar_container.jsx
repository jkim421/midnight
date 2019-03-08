import React from 'react';
import { connect } from 'react-redux';
import SelectionBar from './selection_bar';
import {
  resetSelection,
  updateSelection } from '../../actions/filter_actions';
import { toggleSelection } from '../../actions/ui_actions';


const msp = state => {
  return {
    selectionDisplay: state.filters.selectionDisplay,
    selectionOpen: state.ui.header.selectionOpen,
  };
};

const mdp = dispatch => {
  return {
    updateSelection: (selection) => dispatch(updateSelection(selection)),
    resetSelection: () => dispatch(resetSelection()),
    toggleSelection: () => dispatch(toggleSelection()),
  };
};

export default connect(msp, mdp)(SelectionBar);
