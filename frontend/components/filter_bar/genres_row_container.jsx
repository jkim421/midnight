import React from 'react';
import { connect } from 'react-redux';
import GenresRow from './genresRow';

const msp = state => {
  return {
    genres: state.filters.genres,
  };
};

export default connect(msp)(GenresRow);
