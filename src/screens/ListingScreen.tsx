import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {AnimeList, EmptyState, LoadingIndicator, Screen} from '../components';
import {useFetchAnimeList} from '../hooks';
import {TAnime} from '../types';

const ListingScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [page, setPage] = useState(1);
  const [list, setList] = useState<TAnime[]>();
  const {isLoading, error, data, request} = useFetchAnimeList(route.name, page);

  useEffect(() => {
    request();
  }, [request]);

  useEffect(() => {
    if (data?.data) {
      setList(old => (old ? [...old, ...data.data] : data.data));
    }
  }, [data]);

  if (isLoading && !data) {
    return <LoadingIndicator />;
  }

  if (error && !data) {
    return (
      <Screen>
        <EmptyState
          title={'whoopsie!'}
          message={'Something went wrong, Please try again.'}
          onRetry={request}
        />
      </Screen>
    );
  }

  return (
    <Screen>
      <AnimeList
        data={list}
        onPress={anime =>
          navigation.navigate('listing_details', {id: anime.mal_id})
        }
        isLoading={isLoading}
        onLoadMore={() => {
          if (!isLoading) {
            setPage(old => old + 1);
          }
        }}
      />
    </Screen>
  );
};

export default ListingScreen;
