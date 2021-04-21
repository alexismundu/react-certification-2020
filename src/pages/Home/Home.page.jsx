import React, { useRef, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import VideoList from '../../components/VideoList';
import mockVideos from '../../youtube-videos-mock.json';
import { useAppContext } from '../../state/AppProvider';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState(true);
  const { state } = useAppContext();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  const YOUTUBE_SEARCH_ENDPOINT =
    'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=';

  const fetchVideos = async () => {
    if (process.env.REACT_APP_ENVIRONMENT === 'production') {
      try {
        console.log('Querying ', state.searchValue, '...');
        setIsLoading(true);
        const res = await fetch(
          `${YOUTUBE_SEARCH_ENDPOINT}${state.searchValue}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        );
        if (!res.ok) throw Error('Youtube API response ', res.status);
        const data = await res.json();
        setVideos(data);
        setIsLoading(false);
      } catch (err) {
        console.log('Error: ', err.message);
      }
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setVideos(mockVideos);
        setIsLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    fetchVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.searchValue]);

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Welcome the the challenge!</h1>
      {authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
      ) : (
        <Content isLoading={isLoading} videos={videos} />
      )}
    </section>
  );
}

const Content = ({ videos, isLoading }) => {
  return isLoading ? <h1>Loading...</h1> : <VideoList list={videos} />;
};
export default HomePage;
