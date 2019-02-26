import React from 'react';
import { connect } from 'react-redux';
import HomePage from './home_page';

const msp = (state, ownProps) => {
  return {
    path: ownProps.match.path,
    loading: state.ui.loading.api,
  };
};

const mdp = dispatch => {
  return {

  };
};

export default connect(msp, null)(HomePage);
