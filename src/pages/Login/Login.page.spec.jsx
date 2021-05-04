import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login.page';
import AuthProvider from '../../providers/Auth/Auth.provider';

describe('Login page', () => {
  it('should not render the Login page properly', () => {
    const LoginPage = render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );
    expect(LoginPage).toMatchSnapshot();
  });
});
