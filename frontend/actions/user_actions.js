import { selectAnime } from '../selectors/user_selectors';

export const RECEIVE_ANIME = "RECEIVE_ANIME";

export const receiveUser = (anime) => {
  const sortedAnime = selectAnime(anime);
  debugger
  return {
    type: RECEIVE_ANIME,
    sortedAnime,
  };
};
