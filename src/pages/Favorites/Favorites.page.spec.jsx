import React from 'react';
import { render } from '@testing-library/react';
import Favorites from './Favorites.page';
import AuthProvider from '../../providers/Auth/Auth.provider';

let mockIsAuthenticated = false;

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(() => ({
    authenticated: mockIsAuthenticated,
  })),
}));

describe('Favorites page', () => {
  it('should not render videos when not autheticated', () => {
    const { getByText } = render(
      <AuthProvider>
        <Favorites />
      </AuthProvider>
    );
    expect(getByText('You have to be authenticated')).toBeInTheDocument();
  });

  it('should start loading the videos when authenticated', () => {
    mockIsAuthenticated = true;
    const { getByText } = render(
      <AuthProvider>
        <Favorites />
      </AuthProvider>
    );
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
