import {TAnime, TResponse} from '../types';
import useFetch from './useFetch';

type TStatus = 'airing' | 'complete' | 'upcoming';

const useFetchAnimeList = (status: TStatus, query?: string) => {
  const q = query ? `&q=${query}` : '';

  return useFetch<TResponse<TAnime>>(
    `https://api.jikan.moe/v4/anime?status=${status}${q}`,
  );
};

export default useFetchAnimeList;
