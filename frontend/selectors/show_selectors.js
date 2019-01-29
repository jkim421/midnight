import { parseTags, parseYear } from './tag_selector';

export const filterAnime = (animes, categories, genres) => {
  let filtered = [];

  for (let i = 0; i < categories.length; i++) {
    filtered = filtered.concat(animes[categories[i]]);
  }

  return filtered;
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
    rating: raw.rating,
    start_date: raw.start_date,
    end_date: raw.end_date,
    watching_status: raw.watching_status,
    url: raw.url,
    img_url: raw.image_url,
    score: tags ? tags.score : null,
    genres: tags ? tags.genres : null,
  };
};
