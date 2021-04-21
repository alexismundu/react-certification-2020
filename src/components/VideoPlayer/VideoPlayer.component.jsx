import React from 'react';

function VideoPlayer({ channelId, title }) {
  return (
    <iframe
      title={title}
      style={{ height: 'calc(35vw)', width: '86%' }}
      src={`https://www.youtube.com/embed/${channelId}?rel=0&amp;autoplay=1&mute=0`}
      allowFullScreen
    />
  );
}

export default VideoPlayer;
