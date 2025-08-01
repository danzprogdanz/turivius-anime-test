import { useState, useEffect, useRef } from "react";
import animeService, { initialParams, type IParams } from "../api/services/animeService";

export const useAnimeSearch = (defaultParams: IParams = initialParams) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const debounceTimeoutRef = useRef<number | null>(null);

  // Função de busca (sem debounce)
  const searchAnime = async (term: string) => {
    if (!term.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await animeService.getAnimeByName(term, initialParams);
      setResults(response.data.data || []);
    } catch (err) {
      setError("Falha ao buscar animes");
      console.error("Erro na busca:", err);
    } finally {
      setLoading(false);
    }
  };

  // Debounce manual (300ms)
  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term);

    // Cancela o timeout anterior
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // Configura um novo timeout
    debounceTimeoutRef.current = setTimeout(() => {
      searchAnime(term);
    }, 300);
  };

  // Limpa o timeout ao desmontar o componente
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, []);

  return {
    searchTerm,
    setSearchTerm: handleSearchTermChange, // Usa a versão com debounce
    results,
    loading,
    error,
  };
};