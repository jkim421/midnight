import { parseTags, parseYear } from './tag_selector';

export const selectAnime = (anime) => {
  let sorted = {
    watching: [],
    completed: [],
    onHold: [],
    dropped: [],
    planToWatch: [],
  };

  anime.forEach( raw => {
    const show = parseShow(raw);

    if (show.watching_status === 1) {
      sorted.watching.push(show);
    } else if (show.watching_status === 2) {
      sorted.completed.push(show);
    } else if (show.watching_status === 3) {
      sorted.onHold.push(show);
    } else if (show.watching_status === 4) {
      sorted.dropped.push(show);
    } else if (show.watching_status === 6) {
      sorted.planToWatch.push(show);
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
