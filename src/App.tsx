import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import Navigation from './navigation';
import {StoreProvider} from './stores';
import {darkTheme, lightTheme} from './themes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <StoreProvider>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Navigation />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
