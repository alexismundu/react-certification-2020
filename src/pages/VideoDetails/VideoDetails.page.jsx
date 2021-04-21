import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { Paper } from '@material-ui/core';

import { Container, StyledVideoDetailsSidebar, LeftContent } from './VideoDetails.styled';
import mockVideos from '../../youtube-videos-mock.json';
import VideoPlayer from '../../components/VideoPlayer';
import VideoDetailsDescription from '../../components/VideoDetailsDescription';

const VideoDetails = () => {
  const { id } = useParams();
  const { title, description, publishedAt, videoId } = useLocation().state;
  const [isLoading, setIsLoading] = useState(true);
  const [relatedVideos, setRelatedVideos] = useState(true);

  // const YOUTUBE_SEARCH_ENDPOINT =
  //   'https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&relatedToVideoId=';

  const fetchVideos = async () => {
    try {
      // const res = await fetch(
      //   `${YOUTUBE_SEARCH_ENDPOINT}${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      // );
      // const mockVideos = await res.json();
      console.log(`Querying ${title} with VideoId ${videoId}...`);
      throw Error('Not using Youtube API for search since I exceeded the quota');
      // setRelatedVideos(mockVideos);
      // setIsLoading(false);
    } catch (err) {
      console.log('Info: ', err.message);
      setTimeout(() => {
        setRelatedVideos(mockVideos);
        setIsLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    fetchVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <LeftContent>
        <VideoPlayer channelId={id} title={title} />
        <VideoDetailsDescription
          title={title}
          description={description}
          publishedAt={publishedAt}
        />
      </LeftContent>
      {isLoading ? (
        <Paper style={{ height: '90vh' }} />
      ) : (
        <StyledVideoDetailsSidebar list={relatedVideos} />
      )}
    </Container>
  );
};

export default VideoDetails;
