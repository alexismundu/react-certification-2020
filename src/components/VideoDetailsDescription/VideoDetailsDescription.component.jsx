import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { VideoDescription } from './VideoDetailsDescription.styled';
import { destructDate } from '../../utils/datetime';
import { isElementInArray, checkInFavorites } from '../../utils/fns';

const formatDate = (date) => {
  const { year, month, day } = destructDate(new Date(date));
  return `${day}-${month}-${year}`;
};

const VideoDetailsDescription = ({ videoId, title, description, publishedAt }) => {
  const [isVideoLiked, setIsVideoLiked] = useState(false);

  useEffect(() => {
    setIsVideoLiked(checkInFavorites(videoId));
  }, [videoId]);

  function handleAddToFavorites() {
    setIsVideoLiked(!isVideoLiked);
    let newFavoriteVideos = [];
    const favoriteVideos = JSON.parse(window.localStorage.getItem('favoriteVideos'));
    const isArrayInitialized = favoriteVideos !== null && favoriteVideos.length > 0;
    let shouldRemoveElement = false;
    if (!isArrayInitialized) {
      newFavoriteVideos.push(videoId);
    } else {
      shouldRemoveElement = isElementInArray(favoriteVideos, videoId);
      if (shouldRemoveElement) {
        newFavoriteVideos = favoriteVideos.filter((value) => value !== videoId);
      } else {
        favoriteVideos.push(videoId);
        newFavoriteVideos = favoriteVideos;
      }
    }

    window.localStorage.setItem('favoriteVideos', JSON.stringify(newFavoriteVideos));
  }

  return (
    <>
      <h1>{title}</h1>
      <button type="button" onClick={handleAddToFavorites}>
        {isVideoLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </button>
      <h6>{formatDate(publishedAt)}</h6>
      <VideoDescription>{description}</VideoDescription>
    </>
  );
};

export default VideoDetailsDescription;
