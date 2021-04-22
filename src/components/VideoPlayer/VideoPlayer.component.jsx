import React from 'react';

function VideoPlayer({ videoId, title }) {
  return (
    <iframe
      title={title}
      style={{ height: 'calc(35vw)', width: '86%' }}
      src={`https://www.youtube.com/embed/${videoId}?rel=0&amp;autoplay=1&mute=0`}
      allowFullScreen
    />
  );
}

export default VideoPlayer;
