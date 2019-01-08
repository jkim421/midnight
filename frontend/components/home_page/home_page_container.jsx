import React from 'react';
import { connect } from 'react-redux';
import HomePage from './home_page';
import { fetchUser } from '../../api/user_api';
import { receiveUser } from '../../actions/user_actions';

const msp = state => {
  return {

  };
};

const mdp = dispatch => {
  return {
    fetchUser: (username, page) => fetchUser(username, page),
    receiveUser: (userData) => dispatch(receiveUser(userData)),
  };
};

export default connect(null, mdp)(HomePage);
