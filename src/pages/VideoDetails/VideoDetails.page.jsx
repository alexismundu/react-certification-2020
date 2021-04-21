import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import {
  Container,
  StyledVideoDetailsSidebar,
  LeftContent,
  StyledPaper,
} from './VideoDetails.styled';
import mockVideos from '../../youtube-videos-mock.json';
import VideoPlayer from '../../components/VideoPlayer';
import VideoDetailsDescription from '../../components/VideoDetailsDescription';

const VideoDetails = () => {
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
  const [relatedVideos, setRelatedVideos] = useState(true);

  const YOUTUBE_SEARCH_RELATED_ENDPOINT =
    'https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&relatedToVideoId=';

  const fetchRelatedVideos = async () => {
    if (process.env.REACT_APP_ENVIRONMENT === 'production') {
      try {
        const res = await fetch(
          `${YOUTUBE_SEARCH_RELATED_ENDPOINT}${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        );
        const videos = await res.json();
        setRelatedVideos(videos);
        setIsLoading(false);
      } catch (err) {
        console.log('Error: ', err.message);
      }
    } else {
      setTimeout(() => {
        setRelatedVideos(mockVideos);
        setIsLoading(false);
      }, 500);
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
      await fetchRelatedVideos();
    } catch (err) {
      console.log('Error: ', err.message);
    }
  };

  useEffect(() => {
    if (currentVideo.title === null) {
      fecthVideoById(id);
    } else {
      setCurrentVideo(locationState);
      fetchRelatedVideos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Container>
      <LeftContent>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <VideoPlayer channelId={id} title={currentVideo.title} />
            <VideoDetailsDescription
              title={currentVideo.title}
              description={currentVideo.description}
              publishedAt={currentVideo.publishedAt}
            />
          </>
        )}
      </LeftContent>

      {isLoading ? (
        <StyledPaper style={{ height: '90vh' }} />
      ) : (
        <StyledVideoDetailsSidebar list={relatedVideos} />
      )}
    </Container>
  );
};

export default VideoDetails;
