function random(limit) {
  return Math.floor(Math.random() * limit);
}

function isElementInArray(arr, e) {
  return Boolean(arr.find((tmp) => tmp === e));
}

function checkInFavorites(videoId) {
  const favoriteVideos = JSON.parse(window.localStorage.getItem('favoriteVideos'));
  if (favoriteVideos === null) return false;
  return isElementInArray(favoriteVideos, videoId);
}

export { random, isElementInArray, checkInFavorites };
