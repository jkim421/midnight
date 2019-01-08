import React from 'react';
import { connect } from 'react-redux';
import HomePage from './home_page';
import { fetchUser } from '../../api/user_api';

const msp = state => {
  return {

  };
};

const mdp = dispatch => {
  return {
    fetchUser: (username) => dispatch(fetchUser(username)),
  };
};

export default connect(msp, mdp)(HomePage);
