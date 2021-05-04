import React from 'react';
import { render } from '@testing-library/react';
import VideoPlayer from './VideoPlayer.component';

const EXPECTED_VIDEO_ID = 'TEST_ID';
const EXPECTED_VIDEO_TITLE = 'TEST VIDEO TITLE';
const VIDEO_PLAYER_TEST_ID = 'video-player';

describe('VideoPlayer', () => {
  it('should have the correct video ID', () => {
    const { getByTestId } = render(
      <VideoPlayer videoId={EXPECTED_VIDEO_ID} title={EXPECTED_VIDEO_TITLE} />
    );
    expect(getByTestId(VIDEO_PLAYER_TEST_ID)).toHaveAttribute(
      'src',
      `https://www.youtube.com/embed/${EXPECTED_VIDEO_ID}?rel=0&amp;autoplay=1&mute=0`
    );
  });

  it('should have the correct video title', () => {
    const { getByTestId } = render(
      <VideoPlayer videoId={EXPECTED_VIDEO_ID} title={EXPECTED_VIDEO_TITLE} />
    );
    expect(getByTestId(VIDEO_PLAYER_TEST_ID)).toHaveAttribute(
      'title',
      EXPECTED_VIDEO_TITLE
    );
  });
});
