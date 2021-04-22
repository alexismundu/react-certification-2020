import { FAVORITES_STORAGE_KEY } from './constants';

function random(limit) {
  return Math.floor(Math.random() * limit);
}

function getFavoriteVideos() {
  return JSON.parse(window.localStorage.getItem(FAVORITES_STORAGE_KEY));
}

function isVideoInFavorites(list, videoId) {
  return Boolean(
    list.find((element) => {
      return element.videoId === videoId;
    })
  );
}

function setFavorites(list) {
  window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(list));
}

function checkInFavorites(videoId) {
  const favoriteVideos = getFavoriteVideos();
  if (favoriteVideos === null) return false;
  return isVideoInFavorites(favoriteVideos, videoId);
}

function removeFromFavorites(list, videoId) {
  return list.filter((element) => element.videoId !== videoId);
}

export {
  random,
  getFavoriteVideos,
  setFavorites,
  isVideoInFavorites,
  checkInFavorites,
  removeFromFavorites,
};
