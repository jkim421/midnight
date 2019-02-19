import React from 'react';
import { connect } from 'react-redux';
import ListIndex from './list_index';

import { filterAnime } from '../../selectors/show_selectors';

const msp = state => {
  const filters = state.filters;
  const selection = state.selection;
  const anime = state.entities.animes;

  return {
    shows: filterAnime(anime, filters, selection),
  };
};

const mdp = dispatch => {
  return {
  };
};

export default connect(msp, mdp)(ListIndex);
