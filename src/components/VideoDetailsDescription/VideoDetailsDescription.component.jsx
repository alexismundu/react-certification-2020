import React from 'react';

import { VideoDescription } from './VideoDetailsDescription.styled';

const formatDate = (date) => {
  const d = new Date(date);
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  return `${da}-${mo}-${ye}`;
};

const VideoDetailsSidebar = ({ title, description, publishedAt }) => {
  return (
    <>
      <h1>{title}</h1>
      <h6>{formatDate(publishedAt)}</h6>
      <VideoDescription>{description}</VideoDescription>
    </>
  );
};

export default VideoDetailsSidebar;
