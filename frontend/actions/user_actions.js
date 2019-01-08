import { selectAnime } from '../selectors/user_selectors';

export const RECEIVE_ANIME = "RECEIVE_ANIME";

export const receiveUser = (anime) => {
  debugger
  const sortedAnime = selectAnime(anime);
  return {
    type: RECEIVE_ANIME,
    sortedAnime,
  };
};
