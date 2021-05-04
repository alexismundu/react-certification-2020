import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router';
import FavoriteIcon from '@material-ui/icons/Favorite';

import mockVideos from '../../youtube-videos-mock.json';
import VideoPlayer from '../../components/VideoPlayer';
import VideoDetailsSidebarComponent from '../../components/VideoDetailsSidebar';
import { Container, LeftContent, StyledPaper } from './FavoriteDetails.page.styled';
import { getFavoriteVideos } from '../../utils/fns';

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
  const [sideBarVideos, setSideBarVideos] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const YOUTUBE_SEARCH_ENDPOINT =
    'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=';

  const fetchVideos = async () => {
    if (process.env.REACT_APP_ENVIRONMENT === 'production') {
      try {
        console.log('Querying Favorites ...');
        const favoriteVideos = getFavoriteVideos();
        const res = await fetch(
          // eslint-disable-next-line
          `${YOUTUBE_SEARCH_ENDPOINT}${favoriteVideos.join('%2C')}&key=${
            process.env.REACT_APP_YOUTUBE_API_KEY
          }`
        );
        if (!res.ok) throw Error('Youtube API response ', res.status);
        const data = await res.json();
        console.log(data);
        setSideBarVideos(data);
        setIsLoading(false);
      } catch (err) {
        console.log('Error: ', err.message);
      }
    } else {
      setTimeout(() => {
        setSideBarVideos(mockVideos);
        setIsLoading(false);
      }, 1000);
    }
  };

  const fecthVideoById = async () => {
    try {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const data = await res.json();
      const video = data.items[0];
      setCurrentVideo(video.snippet);
      await fetchVideos();
    } catch (err) {
      console.log('Error: ', err.message);
    }
  };

  useEffect(() => {
    if (currentVideo.title === null) {
      fecthVideoById(id);
    } else {
      setCurrentVideo(locationState);
      fetchVideos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  console.log(sideBarVideos);

  return (
    <>
      <h1>
        {currentVideo.title} <FavoriteIcon />
      </h1>
      <Container>
        <LeftContent>
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            <VideoPlayer videoId={id} title={currentVideo.title} />
          )}
        </LeftContent>
        {isLoading ? (
          <StyledPaper style={{ height: '90vh' }} />
        ) : (
          <VideoDetailsSidebarComponent list={sideBarVideos} />
        )}
      </Container>
    </>
  );
}
