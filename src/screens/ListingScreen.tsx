import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Screen, TextPrimary, TextSecondary} from '../components';

const ListingScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <Screen>
      <TextPrimary>Listing: {route?.name}</TextPrimary>
      <TouchableOpacity
        onPress={() => navigation.navigate('listing_details', {id: '1'})}>
        <TextSecondary>Details 1</TextSecondary>
      </TouchableOpacity>
    </Screen>
  );
};

export default ListingScreen;
