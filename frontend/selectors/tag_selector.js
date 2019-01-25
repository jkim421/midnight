import { GENRES, TYPES } from './defined_tags.js';

export const parseYear = (string) => {
  return string.slice(0, 4);
};

export const parseTags = (tags) => {

  if (!tags) return null;

  let parsed;
  let split = tags.split(", ");

  const score = parseScore(split);
  const genres = parseGenres(split);

  return {
    score: score,
    genres: genres,
  };
};

const parseScore = (arr) => {
  let score = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].slice(0, 6) === "Score:") {
      score = parseFloat(arr[i].slice(7));
    }
  }

  return score;
};

const parseGenres = (arr) => {
  let genreTags = [];

  for (let i = 0; i < arr.length; i++) {
    if (GENRES.includes(arr[i])) {
      genreTags.push(arr[i]);
    }
  }

  return genreTags.sort();
};
