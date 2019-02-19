import React from 'react';
import { connect } from 'react-redux';
import SelectionCheckbox from './selection_checkbox';
import { updateSelection } from '../../actions/filter_actions';

const msp = state => {
  return {
    selectionDisplay: state.filters.selectionDisplay,
  };
};

const mdp = dispatch => {
  return {
    updateSelection: (selection) => dispatch(updateSelection(selection)),
  };
};

export default connect(msp, mdp)(SelectionCheckbox);
