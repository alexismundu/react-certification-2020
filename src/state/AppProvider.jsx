import React, { createContext, useContext, useReducer } from 'react';

import Theme from './ThemeProvider';
import { appInitialState, appReducer } from './AppReducer';

const AppContext = createContext({
  searchValue: '',
  // eslint-disable-next-line
  setTheme: () => { },
  theme: {},
});

function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`Can't use "useAppContext" without a AppContext!`);
  }
  return context;
}

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, appInitialState);

  return (
    <Theme theme={state.theme}>
      <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
    </Theme>
  );
}

export { useAppContext };
export default AppProvider;
