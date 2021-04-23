import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import VideoDetails from '../../pages/VideoDetails';
import Favorites from '../../pages/Favorites';
import FavoriteDetails from '../../pages/FavoriteDetails';
import Private from '../Private';
import Layout from '../Layout';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Private exact path="/" component={HomePage} />
            <Private exact path="/video/:id" component={VideoDetails} />
            <Private exac path="/favorites/:id" component={FavoriteDetails} />
            <Private exac path="/favorites" component={Favorites} />
            <Private path="*" component={NotFound} />
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
