import React from 'react';

import { StyledVideoList } from './VideoList.styled';
import VideoListItem from '../VideoListItem';

export default function VideoList({ list }) {
  return (
    <StyledVideoList>
      {list.items.map((e) => {
        return list.kind === 'youtube#videoListResponse'
          ? e.kind === 'youtube#video' && <VideoListItem data={e} key={e.etag} />
          : e.id.kind === 'youtube#video' && <VideoListItem data={e} key={e.etag} />;
      })}
    </StyledVideoList>
  );
}
