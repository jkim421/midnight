export const filterAnime = (animes, filters) => {
  const { categories, types, ratings, scores } = filters;
  let filtered = [];

  console.time("filterAnime");

  for (let i = 0; i < categories.length; i++) {
    filtered = filtered.concat(animes[categories[i]]);
  }


  filtered = filterTypes(filtered, types);
  filtered = filterRatings(filtered, ratings);
  filtered = filterScores(filtered, scores);

  console.timeEnd("filterAnime");

  return filtered;
};

export const filterAnime = (animes, filters) => {
  const { categories, types, ratings, scores } = filters;
  const low = parseFloat(scores[0]);
  const high = parseFloat(scores[1]);

  let filtered = [];

  console.time("filterAnime");

  for (let i = 0; i < categories.length; i++) {
    filtered = filtered.concat(animes[categories[i]]);
  }

  filtered = filtered
    .filter(show => types.includes(show.type))
    .filter(show => ratings.includes(show.rating))
    .filter(show => show.score >= low && show.score <= high);

    console.timeEnd("filterAnime");

  return filtered;
};

export const filterAnime = (animes, filters) => {
  const { categories, types, ratings, scores } = filters;
  let filtered = [];

  console.time("filterAnime");

  for (let i = 0; i < categories.length; i++) {
    filtered = filtered.concat(animes[categories[i]]);
  }

  filtered = filterTypes(types,
    filterRatings(ratings,
      filterScores(scores, filtered)
    )
  );

  console.timeEnd("filterAnime");

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
