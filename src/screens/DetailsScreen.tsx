import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Screen, TextPrimary} from '../components';
import {TNativeStackScreenProps} from '../navigation/types';

const DetailsScreen = () => {
  const route = useRoute<TNativeStackScreenProps<'details'>['route']>();

  return (
    <Screen>
      <TextPrimary>Details {route.params.id}</TextPrimary>
    </Screen>
  );
};

export default DetailsScreen;
