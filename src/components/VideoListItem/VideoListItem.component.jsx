import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

import { StyledVideo, VideoTitle, Thumbnail, ChannelTitle } from './VideoListItem.styled';

const VideoLisItem = ({ data }) => {
  const { title, thumbnails, channelTitle, description, publishedAt } = data.snippet;
  const { videoId } = data.id;
  return (
    <StyledVideo>
      <Link
        to={{
          pathname: `/video/${data.id.videoId}`,
          state: { title, description, publishedAt, videoId },
        }}
      >
        <Paper elevation={0}>
          <Thumbnail src={thumbnails.default.url} alt={title} />
          <VideoTitle>{title}</VideoTitle>
          <ChannelTitle>{channelTitle}</ChannelTitle>
        </Paper>
      </Link>
    </StyledVideo>
  );
};

export default withRouter(VideoLisItem);
