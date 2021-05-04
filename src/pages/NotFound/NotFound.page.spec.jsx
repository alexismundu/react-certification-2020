import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import NotFound from './NotFound.page';
import AuthProvider from '../../providers/Auth/Auth.provider';

describe('NotFound page', () => {
  it('should not render the Not found page properly', () => {
    const NotFoundPage = render(
      <Router>
        <AuthProvider>
          <NotFound />
        </AuthProvider>
      </Router>
    );
    expect(NotFoundPage).toMatchSnapshot();
  });
});
