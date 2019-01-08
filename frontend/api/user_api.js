export const fetchUser = (username, page) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.jikan.moe/v3/user/${username}/animelist/all/${page}`,
  });
};
