import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {DetailsScreen, FavoritesScreen} from '../screens';
import TabNavigator from './TabNavigator';
import {TNativeStackNavigatorParams} from './types';

const Stack = createNativeStackNavigator<TNativeStackNavigatorParams>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="listing"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="favorites" component={FavoritesScreen} />
        <Stack.Screen name="details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
