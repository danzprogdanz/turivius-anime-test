import { useState, useEffect, useCallback } from 'react';
import animeService from '../../api/services/animeService';
import type { IAnime } from '../../api/types/AnimeResponse';

export const useAnime = (id: string) => {
    const [data, setData] = useState<IAnime | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchAnime = useCallback(async () => {
         try {
            setLoading(true);
            const response = await animeService.getAnimeById(id);
            setData(response.data.data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch anime');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [id]);


    useEffect(() => {
        if (id) {
            fetchAnime();
        }
    }, [id, fetchAnime]);


    return {
        data,
        loading,
        error,
        refetch: fetchAnime
    };
};