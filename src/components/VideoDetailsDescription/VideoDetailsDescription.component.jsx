import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { VideoDescription } from './VideoDetailsDescription.styled';
import { destructDate } from '../../utils/datetime';

const formatDate = (date) => {
  const { year, month, day } = destructDate(new Date(date));
  return `${day}-${month}-${year}`;
};

const VideoDetailsDescription = ({ videoId, title, description, publishedAt }) => {
  const handleAddToFavorites = () => {
    console.log('Added to favorites ', title, videoId);
  };

  return (
    <>
      <h1>{title}</h1>
      <button type="button" onClick={handleAddToFavorites}>
        <FavoriteIcon />
      </button>
      <h6>{formatDate(publishedAt)}</h6>
      <VideoDescription>{description}</VideoDescription>
    </>
  );
};

export default VideoDetailsDescription;
