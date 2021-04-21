import React from 'react';

import Header from '../Header';
import { Main, GlobalWrapper } from './Layout.styled';

function Layout({ children }) {
  return (
    <GlobalWrapper>
      <Header />
      <Main>{children}</Main>
    </GlobalWrapper>
  );
}

export default Layout;
