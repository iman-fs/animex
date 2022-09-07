import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DetailsScreen, FavoritesScreen} from '../screens';

export type TFavoritesStackNavigatorParams = {
  favorites_list: undefined;
  favorites_details: {id: string};
};

const Stack = createNativeStackNavigator<TFavoritesStackNavigatorParams>();

const FavoritesStackNavigator = () => (
  <Stack.Navigator initialRouteName="favorites_list">
    <Stack.Screen name="favorites_list" component={FavoritesScreen} />
    <Stack.Screen name="favorites_details" component={DetailsScreen} />
  </Stack.Navigator>
);

export default FavoritesStackNavigator;
