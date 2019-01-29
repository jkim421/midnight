import React from 'react';
import { connect } from 'react-redux';
import CategoryCheckbox from './category_checkbox';
import {
  addCategory,
  removeCategory }
    from '../../actions/filter_actions';

const msp = state => {
  debugger
  return {
    categories: state.filters.categories,
  };
};

const mdp = dispatch => {
  return {
    addCategory: (categoryId) => dispatch(addCategory(categoryId)),
    removeCategory: (categoryId) => dispatch(removeCategory(categoryId)),
  };
};

export default connect(msp, mdp)(CategoryCheckbox);
