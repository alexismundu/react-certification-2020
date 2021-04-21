import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header.component';
import AppProvider from '../../state/AppProvider';

describe('Header', () => {
  it('should render darkmode switch in header', () => {
    const { getByText } = render(
      <AppProvider>
        <Header />
      </AppProvider>
    );
    expect(getByText('Dark mode')).toBeInTheDocument();
  });

  it('should render the search field in header', () => {
    const { getByText } = render(
      <AppProvider>
        <Header />
      </AppProvider>
    );
    expect(getByText('Search...')).toBeInTheDocument();
  });
});
