import React from 'react';
import { ThemeProvider } from 'styled-components';

import Router from './routes/Router';
import GlobalStyles from './components/GlobalStyles';
import { useSelector } from 'react-redux';
import { StoreState } from './reducers';

const App = () => {
  const { activeTheme } = useSelector((state: StoreState) => state.theme);

  return (
    <ThemeProvider theme={{ theme: activeTheme }}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
