import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router';
import FavoriteIcon from '@material-ui/icons/Favorite';

import VideoPlayer from '../../components/VideoPlayer';

export default function FavoriteDetails() {
  const { id } = useParams();
  const locationState = useLocation().state;
  const [currentVideo, setCurrentVideo] = useState(
    locationState || {
      title: null,
      description: null,
      publishedAt: '2019-09-30T23:54:32Z',
    }
  );
  const [isLoading, setIsLoading] = useState(true);

  const fecthVideoById = async () => {
    try {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const data = await res.json();
      const video = data.items[0];
      setCurrentVideo(video.snippet);
      setIsLoading(false);
    } catch (err) {
      console.log('Error: ', err.message);
    }
  };

  useEffect(() => {
    console.log(id);
    if (currentVideo.title === null) {
      fecthVideoById(id);
    } else {
      console.log(locationState);
      setCurrentVideo(locationState);
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <>
      <h1>
        {currentVideo.title} <FavoriteIcon />
      </h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <VideoPlayer videoId={id} title={currentVideo.title} />
      )}
    </>
  );
}
