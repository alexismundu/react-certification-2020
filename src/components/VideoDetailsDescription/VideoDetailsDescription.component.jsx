import React from 'react';

import { VideoDescription } from './VideoDetailsDescription.styled';
import { destructDate } from '../../utils/datetime';

const formatDate = (date) => {
  const { year, month, day } = destructDate(new Date(date));
  return `${day}-${month}-${year}`;
};

const VideoDetailsDescription = ({ title, description, publishedAt }) => {
  return (
    <>
      <h1>{title}</h1>
      <h6>{formatDate(publishedAt)}</h6>
      <VideoDescription>{description}</VideoDescription>
    </>
  );
};

export default VideoDetailsDescription;
