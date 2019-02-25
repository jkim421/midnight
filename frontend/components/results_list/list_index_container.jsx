import React from 'react';
import { connect } from 'react-redux';
import ListIndex from './list_index';
import { startList, endList } from '../../actions/ui_actions';
import { filterAnime } from '../../selectors/show_selectors';

const msp = state => {
  const filters = state.filters;
  const selection = state.selection;
  const anime = state.entities.animes;
  
  return {
    filters,
    shows: filterAnime(anime, filters, selection),
    loading: state.ui.loading.api,
    updating: state.ui.loading.list,
  };
};

const mdp = dispatch => {
  return {
    startList: () => dispatch(startList()),
    endList: () => dispatch(endList()),
  };
};

export default connect(msp, mdp)(ListIndex);
