import React from 'react';
import { withRouter } from 'react-router-dom';

import { VideoList } from './VideoDetailsSidebar.styled';
import VideoListItem from './VideoListItem.component';

const VideoDetailsSidebar = ({ list }) => {
  console.log('list:', list);
  return (
    <VideoList>
      {list.items.map((e) => (
        <VideoListItem data={e} key={e.etag} />
      ))}
    </VideoList>
  );
};

export default withRouter(VideoDetailsSidebar);
