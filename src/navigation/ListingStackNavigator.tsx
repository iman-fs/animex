import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DetailsScreen} from '../screens';
import TabNavigator from './TabNavigator';

export type TListingStackNavigatorParams = {
  listing_tabs: undefined;
  listing_details: {id: string};
};

const Stack = createNativeStackNavigator<TListingStackNavigatorParams>();

const ListingStackNavigator = () => (
  <Stack.Navigator initialRouteName="listing_tabs">
    <Stack.Screen name="listing_tabs" component={TabNavigator} />
    <Stack.Screen name="listing_details" component={DetailsScreen} />
  </Stack.Navigator>
);

export default ListingStackNavigator;
