import { parseTags, parseYear } from './tag_selector';
import { sortResult } from './show_sort';

export const filterAnime = (animes, filters, selection) => {
  const { selectionDisplay, categories, types, ratings, scores, genres, sort } = filters;
  const low = parseFloat(scores[0]);
  const high = parseFloat(scores[1]);

  const selectedShows = [].concat.apply([], Object.values(selection));

  // let result = [];
  //
  // for (let i = 0; i < categories.length; i++) {
  //   result = result.concat(Object.values(animes[categories[i]]));
  // }

  let result = Object.values(animes);

  result = result
    .filter(show => categories.includes(show.watching_status))
    .filter(show => types.includes(show.type))
    .filter(show => ratings.includes(show.rating))
    .filter(show => show.score >= low && show.score <= high)
    .filter(show => filterGenres(show, genres))
    .filter(show => filterSelection(show, selectionDisplay, selectedShows));

  result = sortResult(result, sort);

  return result;
};

const filterGenres = (show, genres) => {
  if (genres.length === 0) {
    return true;
  }
  else if (show.genres === null) {
    return false;
  } else {
    return genres.every( genre => show.genres.includes(genre));
  }
};

const filterSelection = (show, selectionDisplay, selectedShows) => {
  if (selectionDisplay === "2") {
    return selectedShows.includes(show.id) ? true : false;
  } else if (selectionDisplay === "3") {
    return selectedShows.includes(show.id) ? false : true;
  } else {
    return true;
  }
};

export const processAnime = (anime) => {
  let result = {};

  for (let i = 0; i < anime.length; i++) {
    let raw = anime[i];
    result[raw.mal_id] = parseShow(raw);
  }

  return result;
};

const parseShow = (raw) => {
  let tags = parseTags(raw.tags);

  return {
    id: raw.mal_id,
    title: raw.title,
    type: raw.type,
    rating: parseRating(raw.rating),
    start_date: raw.start_date,
    end_date: raw.end_date,
    watching_status: raw.watching_status,
    url: raw.url,
    img_url: raw.image_url,
    score: tags ? tags.score : null,
    user_score: raw.score,
    genres: tags ? tags.genres : null,
  };
};

const parseRating = (rating) => {
  if (rating === "R" || rating === "R+") {
    return "R";
  } else {
    return rating;
  }
};
