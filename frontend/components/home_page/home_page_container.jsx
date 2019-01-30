import React from 'react';
import { connect } from 'react-redux';
import HomePage from './home_page';

const msp = state => {
  return {
    loading: state.ui.loading,
  };
};

const mdp = dispatch => {
  return {

  };
};

export default connect(msp, null)(HomePage);
