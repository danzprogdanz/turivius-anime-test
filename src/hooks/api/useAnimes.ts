import { useState, useEffect } from 'react';
import animeService, { initialParams, type IParams } from '../../api/services/animeService';

export const useAnimes = (initialFetchParams: IParams = initialParams) => {
  const [animes, setAnimes] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [params, setParams] = useState<IParams>(initialFetchParams);
  const [meta, setMeta] = useState<{ count?: number }>({});
  const [links, setLinks] = useState<{ first?: string; next?: string; last?: string }>({});

  const fetchAnimes = async () => {
    try {
      setLoading(true);
      const response = await animeService.getAnimes(params);
      setAnimes(response.data.data || []);
      setMeta(response.data.meta || {});
      setLinks(response.data.links || {});
      setError(null);
    } catch (err) {
      setError('Failed to fetch animes');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnimes();
  }, [params]);

  // Helper functions for pagination
  const goToNextPage = () => {
    if (links.next) {
      // For cursor-based pagination
      const url = new URL(links.next);
      const cursor = url.searchParams.get('page[cursor]');
      setParams(prev => ({
        ...prev,
        page: {
          ...prev.page,
          cursor
        }
      }));
    } else if (meta.count && params.page?.offset !== undefined && params.page?.limit) {
      // For offset-based pagination
      const nextOffset = (params.page.offset || 0) + params.page.limit;
      if (nextOffset < meta.count) {
        setParams(prev => ({
          ...prev,
          page: {
            ...prev.page,
            offset: nextOffset
          }
        }));
      }
    }
  };

  const goToPrevPage = () => {
    if (params.page?.offset && params.page?.limit) {
      const prevOffset = Math.max(0, params.page.offset - params.page.limit);
      setParams(prev => ({
        ...prev,
        page: {
          ...prev.page,
          offset: prevOffset
        }
      }));
    }
  };

  const updatePageLimit = (limit: number) => {
    setParams(prev => ({
      ...prev,
      page: {
        ...prev.page,
        limit,
        offset: 0 
      }
    }));
  };

  return {
    animes,
    loading,
    error,
    meta,
    links,
    currentParams: params,
    setParams,
    refetch: fetchAnimes,
    goToNextPage,
    goToPrevPage,
    updatePageLimit
  };
};