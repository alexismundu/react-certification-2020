import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { useAuth } from '../../providers/Auth';
import VideoList from '../../components/VideoList';
import { StyledLink, Section } from './Favorites.page.styled';
import { getFavoriteVideos } from '../../utils/fns';
import mockVideos from '../../youtube-favorite-videos-mock.json';

function Favorites() {
  const { authenticated } = useAuth();
  const [videos, setVideos] = useState({ items: [] });
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
          `${YOUTUBE_SEARCH_ENDPOINT}${favoriteVideos.join('%2C')}&key=${process.env.REACT_APP_YOUTUBE_API_KEY
          }`
        );
        if (!res.ok) throw Error('Youtube API response ', res.status);
        const data = await res.json();
        console.log(data);
        setVideos(data);
        setIsLoading(false);
      } catch (err) {
        console.log('Error: ', err.message);
      }
    } else {
      setTimeout(() => {
        setVideos(mockVideos);
        setIsLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <Section>
      <h1>
        Favorites <FavoriteIcon />
      </h1>
      {authenticated ? (
        <Content isLoading={isLoading} videos={videos} />
      ) : (
        <h2>You have to be authenticated</h2>
      )}
    </Section>
  );
}

const Content = ({ videos, isLoading }) => {
  // eslint-disable-next-line no-nested-ternary
  return isLoading ? (
    <h1>Loading...</h1>
  ) : videos.items.length ? (
    <VideoList list={videos} />
  ) : (
    <>
      <h2>
        Favorite your first video by clicking the <FavoriteIcon /> icon
      </h2>
      <StyledLink to="/">← GO</StyledLink>
    </>
  );
};
export default Favorites;
