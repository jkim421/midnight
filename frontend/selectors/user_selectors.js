export const selectAnime = (anime) => {
  let sorted = {
    watching: [],
    completed: [],
    onHold: [],
    dropped: [],
    planToWatch: [],
  };

  anime.forEach( show => {
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
