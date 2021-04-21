import React from 'react';
import { Link } from 'react-router-dom';

import {
  VideoTitle,
  Thumbnail,
  ChannelTitle,
  StyledVideo,
} from './VideoDetailsSidebar.styled';

export default ({ data }) => {
  const { title, thumbnails, channelTitle, description, publishedAt } = data.snippet;
  const { videoId } = data.id;

  return (
    <Link
      to={{
        pathname: `/video/${data.id.videoId}`,
        state: { title, description, publishedAt, videoId },
      }}
    >
      <StyledVideo>
        <Thumbnail src={thumbnails.default.url} alt={title} />
        <VideoTitle>{title}</VideoTitle>
        <ChannelTitle>{channelTitle}</ChannelTitle>
      </StyledVideo>
    </Link>
  );
};
