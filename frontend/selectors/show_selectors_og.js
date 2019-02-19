import { parseTags, parseYear } from './tag_selector';
import { sortResult } from './show_sort';

export const filterAnime = (animes, filters) => {
  const { categories, types, ratings, scores, genres, sort } = filters;
  const low = parseFloat(scores[0]);
  const high = parseFloat(scores[1]);

  let result = [];
  debugger
  for (let i = 0; i < categories.length; i++) {
    result = result.concat(animes[categories[i]]);
  }

  result = result
    .filter(show => types.includes(show.type))
    .filter(show => ratings.includes(show.rating))
    .filter(show => show.score >= low && show.score <= high)
    .filter(show => filterGenres(show, genres));

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

export const sortAnime = (anime) => {
  let sorted = {
    1: [],
    2: [],
    3: [],
    4: [],
    6: [],
  };

  anime.forEach( raw => {
    const show = parseShow(raw);

    if (show.watching_status === 1) {
      sorted[1].push(show);
    } else if (show.watching_status === 2) {
      sorted[2].push(show);
    } else if (show.watching_status === 3) {
      sorted[3].push(show);
    } else if (show.watching_status === 4) {
      sorted[4].push(show);
    } else if (show.watching_status === 6) {
      sorted[6].push(show);
    }
  });

  return sorted;
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
