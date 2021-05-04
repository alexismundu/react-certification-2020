import React from 'react';
import { render } from '@testing-library/react';

import VideoDetails from './VideoDetails.page';
import AuthProvider from '../../providers/Auth/Auth.provider';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(() => ({
    id: 'videoTestId',
  })),
  useLocation: jest.fn(() => ({ state: null })),
}));

describe('VideoDetails page', () => {
  it('should start loading the videos', () => {
    const { getByText } = render(
      <AuthProvider>
        <VideoDetails />
      </AuthProvider>
    );
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
