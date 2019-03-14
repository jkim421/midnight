import { parseTags, parseYear } from './tag_selector';
import { sortResult } from './show_sort';

export const filterAnime = (animes, filters, selection) => {
  const {
    selectionDisplay,
    categories,
    types,
    ratings,
    scores,
    genres,
    sort
  } = filters;

  let shows = Object.values(animes);

  const filterFuncs = [
    show => filterCategories(show, categories),
    show => filterTypes(show, types),
    show => filterRatings(show, ratings),
    show => filterScore(show, scores),
    show => filterGenres(show, genres),
    show => filterSelection(show, selectionDisplay, selection)
  ];

  let filtered = filterPipe(filterFuncs)(shows);

  filtered = sortResult(filtered, sort);

  return filtered;
};

const filterPipe = (filters) => (showList) => {
  return filters.reduce((result, fn) => result.filter(fn), showList);
};

const filterCategories = (show, categories) => {
  return categories.includes(show.watching_status);
};

const filterTypes = (show, types) => {
  return types.includes(show.type);
};

const filterRatings = (show, ratings) => {
  return ratings.includes(show.rating);
};

const filterScore = (show, scores) => {
  const low = parseFloat(scores[0]);
  const high = parseFloat(scores[1]);
  return show.score >= low && show.score <= high;
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

const filterSelection = (show, selectionDisplay, selection) => {
  if (selectionDisplay === "2") {
    return selection.includes(show.id) ? true : false;
  } else if (selectionDisplay === "3") {
    return selection.includes(show.id) ? false : true;
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
