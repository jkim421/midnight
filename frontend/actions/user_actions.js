import { selectAnime } from '../selectors/show_selectors';

export const RECEIVE_ANIME = "RECEIVE_ANIME";

export const receiveUser = (anime) => {
  const sortedAnime = selectAnime(anime);
  return {
    type: RECEIVE_ANIME,
    sortedAnime,
  };
};
