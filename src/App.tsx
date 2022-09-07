import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {Screen, TextPrimary, TextSecondary} from './components';
import {darkTheme, lightTheme} from './themes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Screen>
        <TextPrimary>Primary</TextPrimary>
        <TextSecondary>Secondary</TextSecondary>
      </Screen>
    </ThemeProvider>
  );
};

export default App;
