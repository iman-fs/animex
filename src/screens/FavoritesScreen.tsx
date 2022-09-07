import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Screen, TextPrimary, TextSecondary} from '../components';

const FavoritesScreen = () => {
  const navigation = useNavigation();

  return (
    <Screen>
      <TextPrimary>Favorites</TextPrimary>
      <TouchableOpacity
        onPress={() => navigation.navigate('details', {id: '2'})}>
        <TextSecondary>Details 2</TextSecondary>
      </TouchableOpacity>
    </Screen>
  );
};

export default FavoritesScreen;
