import { parseTags, parseYear } from './tag_selector';

export const filterAnime = (animes, filters) => {
  const { categories, types, ratings, scores } = filters;
  let filtered = [];

  for (let i = 0; i < categories.length; i++) {
    filtered = filtered.concat(animes[categories[i]]);
  }

  filtered = filterTypes(filtered, types);
  filtered = filterRatings(filtered, ratings);
  filtered = filterScores(filtered, scores);

  return filtered;
};

const filterTypes = (animes, types) => {
  return animes.filter(show => types.includes(show.type));
};

const filterRatings = (animes, ratings) => {
  return animes.filter(show => ratings.includes(show.rating));
};

const filterScores = (animes, scores) => {
  const low = parseFloat(scores[0]);
  const high = parseFloat(scores[1]);
  return animes.filter(show => show.score >= low && show.score <= high);
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
