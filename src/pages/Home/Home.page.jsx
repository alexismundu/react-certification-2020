import React, { useRef, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import './Home.styles.css';
import VideoList from '../../components/VideoList';
import mockVideos from '../../youtube-videos-mock.json';

function HomePage() {
  const history = useHistory();
  const sectionRef = useRef(null);
  const { authenticated, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState(true);

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  // const YOUTUBE_SEARCH_ENDPOINT =
  //   'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=';

  const fetchVideos = async (q = 'Wizeline') => {
    try {
      // const res = await fetch(
      //   `${YOUTUBE_SEARCH_ENDPOINT}${q}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      // );
      // const data = await res.json();
      console.log(q);
      throw Error('Not using Youtube API for search');
      // setVideos(data);
      // setIsLoading(false);
    } catch (err) {
      console.log(err);
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
