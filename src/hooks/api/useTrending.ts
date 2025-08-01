import { useCallback, useEffect, useState } from 'react';
import animeTrandingService from '../../api/services/animeTredingService';
import type { IAnime } from '../../api/types/AnimeResponse';

export const useAnimesTrending = () => {
  const [data, setData] = useState<IAnime[]>([]);

  const fetchAnimeTrending = useCallback(async () => {

    try {
      const response = await animeTrandingService.getTrending();
      console.log('response', response)
      setData(response.data.data)
    } catch (error) {
    }
  }, []);

  useEffect(() => {
    console.log('data', data)
  }, [data])

  useEffect(() => {
    fetchAnimeTrending();
  }, [fetchAnimeTrending]);

  return {
   data
  };
};
