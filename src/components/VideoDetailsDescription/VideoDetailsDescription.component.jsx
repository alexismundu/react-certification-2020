import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { VideoDescription } from './VideoDetailsDescription.styled';
import { destructDate } from '../../utils/datetime';
import { checkInFavorites } from '../../utils/fns';

const formatDate = (date) => {
  const { year, month, day } = destructDate(new Date(date));
  return `${day}-${month}-${year}`;
};

const VideoDetailsDescription = ({
  videoId,
  title,
  description,
  publishedAt,
  onAddToFavorites,
}) => {
  const [isVideoLiked, setIsVideoLiked] = useState(false);

  useEffect(() => {
    setIsVideoLiked(checkInFavorites(videoId));
  }, [videoId]);

  function handleAddToFavorites() {
    setIsVideoLiked(!isVideoLiked);
    onAddToFavorites();
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
