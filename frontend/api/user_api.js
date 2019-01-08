export const fetchUser = (username) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.jikan.moe/v3/user/${username}/`,
  });
};
