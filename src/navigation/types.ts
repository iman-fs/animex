import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type TTabNavigatorParams = {
  airing: undefined;
  complete: undefined;
  upcoming: undefined;
};

export type TNativeStackNavigatorParams = {
  listing: NavigatorScreenParams<TTabNavigatorParams>;
  favorites: undefined;
  details: {id: string};
};

export type TNativeStackScreenProps<
  T extends keyof TNativeStackNavigatorParams,
> = NativeStackScreenProps<TNativeStackNavigatorParams, T>;

export type TTabScreenProps<T extends keyof TTabNavigatorParams> =
  CompositeScreenProps<
    BottomTabScreenProps<TTabNavigatorParams, T>,
    TNativeStackScreenProps<keyof TNativeStackNavigatorParams>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TNativeStackNavigatorParams {}
  }
}
