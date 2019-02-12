export const sortResult = (shows, sort) => {
  if (sort === 1) {
    return shows.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (titleA < titleB) {
        return -1;
      } else if (titleA > titleB) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sort === 2) {
    return shows.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (titleA < titleB) {
        return 1;
      } else if (titleA > titleB) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (sort === 3) {
    return shows.sort((a, b) => {
      if (a.score < b.score) {
        return -1;
      } else if (a.score > b.score) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sort === 4) {
    return shows.sort((a, b) => {
      if (a.score > b.score) {
        return -1;
      } else if (a.score < b.score) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sort === 5) {
    return shows.sort((a, b) => {
      if (Date.parse(a.start_date) > Date.parse(b.start_date)) {
        return 1;
      } else if (Date.parse(a.start_date) < Date.parse(b.start_date)) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (sort === 6) {
    return shows.sort((a, b) => {
      if (Date.parse(a.start_date) > Date.parse(b.start_date)) {
        return -1;
      } else if (Date.parse(a.start_date) < Date.parse(b.start_date)) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sort === 7) {
    return shows.sort((a, b) => {
      if (!a.end_date || Date.parse(a.end_date) > Date.parse(b.end_date)) {
        return 1;
      } else if (!b.end_date || Date.parse(a.end_date) < Date.parse(b.end_date)) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (sort === 8) {
    return shows.sort((a, b) => {
      if (!a.end_date || Date.parse(a.end_date) > Date.parse(b.end_date)) {
        return -1;
      } else if (!b.end_date || Date.parse(a.end_date) < Date.parse(b.end_date)) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return shows;
  }
};
