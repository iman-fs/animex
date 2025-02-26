import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {useTheme} from 'styled-components/native';
import {TAnime} from '../types';
import AnimeCard from './AnimeCard';
import Divider from './Divider';
import EmptyState from './EmptyState';

type TProps = {
  data?: TAnime[];
  onPress?: (anime: TAnime) => void;
  isLoading?: boolean;
  onLoadMore?: () => void;
};

const AnimeList: React.FC<TProps> = ({
  data,
  onPress,
  isLoading,
  onLoadMore,
}) => {
  const {colors} = useTheme();
  const window = useWindowDimensions();

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.mal_id.toString()}
      renderItem={({item}) => (
        <AnimeCard data={item} onPress={() => onPress?.(item)} />
      )}
      ItemSeparatorComponent={() => <Divider size={'90%'} />}
      style={{width: window.width, height: window.height}}
      contentContainerStyle={styles.container}
      ListEmptyComponent={() => (
        <EmptyState title={'Empty'} message={'There is nothing in this list'} />
      )}
      ListFooterComponent={
        isLoading ? <ActivityIndicator color={colors.accent} /> : null
      }
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.1}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export default AnimeList;
