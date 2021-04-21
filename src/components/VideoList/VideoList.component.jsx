import React from 'react';

import { StyledVideoList } from './VideoList.styled';
import VideoListItem from '../VideoListItem';

export default function VideoList({ list }) {
  return (
    <StyledVideoList>
      {list.items.map((e) => (
        <VideoListItem data={e} key={e.etag} />
      ))}
    </StyledVideoList>
  );
}
