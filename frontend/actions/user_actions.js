import { fetchUser } from '../api/user_api';
import { startLoad } from './ui_actions';
import { sortAnime } from '../selectors/show_selectors';

export const RECEIVE_ANIME = "RECEIVE_ANIME";

export const receiveUser = (anime) => {
  const sortedAnime = sortAnime(anime);
  return {
    type: RECEIVE_ANIME,
    sortedAnime,
  };
};
