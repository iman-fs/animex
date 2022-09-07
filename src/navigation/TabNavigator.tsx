import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {ListingScreen} from '../screens';

export type TTabNavigatorParams = {
  airing: undefined;
  complete: undefined;
  upcoming: undefined;
};

const Tab = createBottomTabNavigator<TTabNavigatorParams>();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="airing" component={ListingScreen} />
    <Tab.Screen name="complete" component={ListingScreen} />
    <Tab.Screen name="upcoming" component={ListingScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
