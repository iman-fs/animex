import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import FavoritesStackNavigator from './FavoritesStackNavigator';
import ListingStackNavigator from './ListingStackNavigator';

export type TDrawerNavigatorParams = {
  drawer_listing: undefined;
  drawer_favorites: undefined;
};

const Drawer = createDrawerNavigator<TDrawerNavigatorParams>();

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="drawer_listing">
    <Drawer.Screen name="drawer_listing" component={ListingStackNavigator} />
    <Drawer.Screen
      name="drawer_favorites"
      component={FavoritesStackNavigator}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
