import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout.component';

import AuthProvider from '../../providers/Auth/Auth.provider';

describe('Layout', () => {
  it('should render the header', () => {
    const { getByRole } = render(
      <AuthProvider>
        <Layout>
          <h1>Content</h1>
        </Layout>
      </AuthProvider>
    );
    expect(getByRole('banner')).toBeInTheDocument();
  });

  it('should render the content', () => {
    const { getByText } = render(
      <AuthProvider>
        <Layout>
          <h1>Content</h1>
        </Layout>
      </AuthProvider>
    );
    expect(getByText('Content')).toBeInTheDocument();
  });
});
