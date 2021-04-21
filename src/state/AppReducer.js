import { themes } from './ThemeProvider';

export const appInitialState = {
  searchValue: 'Wizeline',
  theme: themes.light,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_THEME': {
      const newTheme = state.theme === themes.light ? themes.dark : themes.light;
      return {
        ...state,
        theme: newTheme,
      };
    }
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      throw new Error('Reducer action not found');
  }
};
