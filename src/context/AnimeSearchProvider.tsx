import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react';
import animeService from '../api/services/animeService';
import type { IAnime } from '../api/types/AnimeResponse';

interface AnimeSearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  results: IAnime[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  loadMore: () => void;
  resetSearch: () => void;
}

const AnimeSearchContext = createContext<AnimeSearchContextType | undefined>(undefined);

export const AnimeSearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchTerm, setRawSearchTerm] = useState("");
  const [results, setResults] = useState<IAnime[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const debounceTimeoutRef = useRef<number | null>(null);

  const resetSearch = useCallback(() => {
    setResults([]);
    setPage(0);
    setHasMore(true);
  }, []);

  // Actual search function
  const searchAnime = useCallback(async (term: string, pageNum: number = 0) => {
    if (!term.trim()) {
      resetSearch();
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await animeService.getAnimeByName(term, {
        page: {
          limit: 12,
          offset: pageNum * 12
        }
      });
      
      const newResults = response.data.data || [];
      
      if (pageNum === 0) {
        setResults(newResults);
      } else {
        setResults(prev => [...prev, ...newResults]);
      }
      
      setHasMore(newResults.length > 0);
    } catch (err) {
      setError("Failed to fetch anime");
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  }, [resetSearch]);

  // Load more results
  const loadMore = useCallback(() => {
    if (loading || !hasMore || !searchTerm.trim()) return;
    const nextPage = page + 1;
    setPage(nextPage);
    searchAnime(searchTerm, nextPage);
  }, [loading, hasMore, page, searchTerm, searchAnime]);

  // Debounced search term update
  const setSearchTerm = useCallback((term: string) => {
    setRawSearchTerm(term);
    
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      resetSearch();
      searchAnime(term, 0);
    }, 300);
  }, [resetSearch, searchAnime]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  return (
    <AnimeSearchContext.Provider 
      value={{ 
        searchTerm, 
        setSearchTerm, 
        results, 
        loading, 
        error,
        hasMore,
        loadMore,
        resetSearch
      }}
    >
      {children}
    </AnimeSearchContext.Provider>
  );
};

export const useAnimeSearch = () => {
  const context = useContext(AnimeSearchContext);
  if (!context) {
    throw new Error('useAnimeSearch must be used within an AnimeSearchProvider');
  }
  return context;
};