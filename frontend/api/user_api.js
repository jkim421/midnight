export const fetchUser = (username, num) => {
  debugger
  return $.ajax({
    method: 'GET',
    url: `https://api.jikan.moe/v3/user/${username}/animelist/all/${num}`,
  });
};
