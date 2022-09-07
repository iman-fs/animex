import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {CompositeScreenProps} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TDrawerNavigatorParams} from './DrawerNavigator';
import {TFavoritesStackNavigatorParams} from './FavoritesStackNavigator';
import {TListingStackNavigatorParams} from './ListingStackNavigator';
import {TTabNavigatorParams} from './TabNavigator';

export type TRootNavigatorParams = TDrawerNavigatorParams &
  TListingStackNavigatorParams &
  TFavoritesStackNavigatorParams;

export type TNativeStackScreenProps<T extends keyof TRootNavigatorParams> =
  NativeStackScreenProps<TRootNavigatorParams, T>;

export type TTabScreenProps<T extends keyof TTabNavigatorParams> =
  CompositeScreenProps<
    BottomTabScreenProps<TTabNavigatorParams, T>,
    TNativeStackScreenProps<keyof TRootNavigatorParams>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TRootNavigatorParams {}
  }
}
