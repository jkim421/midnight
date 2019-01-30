import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchUser } from '../../api/user_api';
import { receiveUser } from '../../actions/user_actions';
import { startLoad } from '../../actions/ui_actions';

const msp = state => {
  return {
    loading: state.ui.loading,
  };
};

const mdp = dispatch => {
  return {
    startLoad: () => dispatch(startLoad()),
    fetchUser: (username, page) => fetchUser(username, page),
    receiveUser: (userData) => dispatch(receiveUser(userData)),
  };
};

export default connect(msp, mdp)(SearchBar);
