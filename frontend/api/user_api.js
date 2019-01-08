export const fetchUser = (username) => {
  debugger
  return $.ajax({
    method: 'GET',
    url: `https://api.jikan.moe/v3/user/${username}/`
  });
};
