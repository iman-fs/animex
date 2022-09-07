import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import DrawerNavigator from './DrawerNavigator';

const Navigation = () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);

export default Navigation;
