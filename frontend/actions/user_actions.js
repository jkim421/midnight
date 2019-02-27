import { fetchUser } from '../api/user_api';
import { startLoad } from './ui_actions';
import { processAnime } from '../selectors/show_selectors';

export const RECEIVE_ANIME = "RECEIVE_ANIME";

export const receiveUser = ({ username, list }) => {
  const processedAnime = processAnime(list);
  return {
    type: RECEIVE_ANIME,
    username,
    processedAnime,
  };
};
