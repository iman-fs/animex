import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {ListingScreen} from '../screens';
import {TTabNavigatorParams} from './types';

const Tab = createBottomTabNavigator<TTabNavigatorParams>();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="airing" component={ListingScreen} />
      <Tab.Screen name="complete" component={ListingScreen} />
      <Tab.Screen name="upcoming" component={ListingScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
