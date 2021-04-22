import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';

function Private({ component, ...rest }) {
  const { authenticated } = useAuth();
  const Component = component;
  console.log('authenticated', authenticated);

  return (
    <Route
      {...rest}
      render={() => (authenticated ? <Component /> : <Redirect to="/login" />)}
    />
  );
}

export default Private;
