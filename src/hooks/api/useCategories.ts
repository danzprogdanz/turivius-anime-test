import { useCallback, useEffect, useState } from 'react';
import type { CategoriesResponse } from '../../api/types/CategoriesResponse';
import categoriesService from '../../api/services/categoriesService';

export const useCategories = () => {
  const [data, setData] = useState<CategoriesResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);
      const response = await categoriesService.getCategories();
      setData(response.data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return {
    data,
    loading,
    error,
    refetch: fetchCategories
  };
};