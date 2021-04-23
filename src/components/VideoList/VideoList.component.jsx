import React from 'react';

import { StyledVideoList } from './VideoList.styled';
import VideoListItem from '../VideoListItem';
import FavoriteVideoListItem from '../FavoriteVideoListItem';

export default function VideoList({ list }) {
  return (
    <StyledVideoList>
      {list.items.map((e) => {
        return list.kind === 'youtube#videoListResponse'
          ? e.kind === 'youtube#video' && <FavoriteVideoListItem data={e} key={e.etag} />
          : e.id.kind === 'youtube#video' && <VideoListItem data={e} key={e.etag} />;
      })}
    </StyledVideoList>
  );
}
