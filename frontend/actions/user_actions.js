import { fetchUser } from '../api/user_api';
import { startLoad } from './ui_actions';
import { sortAnime } from '../selectors/show_selectors';

export const RECEIVE_ANIME = "RECEIVE_ANIME";

export const receiveUser = ({ username, list }) => {
  const sortedAnime = sortAnime(list);
  return {
    type: RECEIVE_ANIME,
    username,
    sortedAnime,
  };
};
