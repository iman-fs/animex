import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar, TouchableOpacity, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {Screen, TextPrimary, TextSecondary} from './components';
import {darkTheme, lightTheme} from './themes';

const Stack = createNativeStackNavigator();

const TestScreen = ({navigation}) => {
  return (
    <Screen>
      <TextPrimary>Primary</TextPrimary>
      <TextSecondary>Secondary</TextSecondary>
      <TouchableOpacity onPress={() => navigation.navigate('b')}>
        <TextSecondary>Test</TextSecondary>
      </TouchableOpacity>
    </Screen>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="a" component={TestScreen} />
          <Stack.Screen name="b" component={TestScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
