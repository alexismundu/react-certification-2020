import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header.component';
import AppProvider from '../../state/AppProvider';
import AuthProvider from '../../providers/Auth';

describe('Header', () => {
  it('should render darkmode switch in header', () => {
    const { getByText } = render(
      <AuthProvider>
        <AppProvider>
          <Header />
        </AppProvider>
      </AuthProvider>
    );
    expect(getByText('Dark mode')).toBeInTheDocument();
  });

  it('should not render the search field in header if not authenticated', () => {
    const { queryByText } = render(
      <AuthProvider>
        <AppProvider>
          <Header />
        </AppProvider>
      </AuthProvider>
    );
    expect(queryByText('Search...')).not.toBeInTheDocument();
  });
});
