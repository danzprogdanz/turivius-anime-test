import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import animeService, { type IParams } from '../api/services/animeService';
import type { IAnime } from '../api/types/AnimeResponse';

interface AnimeCategoryContextType {
    selectedCategory: string | null;
    setSelectedCategory: (category: string | null) => void;
    categoryResults: IAnime[];
    loading: boolean;
    error: string | null;
    meta: { count?: number };
    links: { first?: string; next?: string; last?: string };
    currentParams: IParams;
    setParams: React.Dispatch<React.SetStateAction<IParams>>;
    goToNextPage: () => void;
    goToPrevPage: () => void;
    updatePageLimit: (limit: number) => void;
    resetCategory: () => void;
    resetPagination: () => void
}

const AnimeCategoryContext = createContext<AnimeCategoryContextType | undefined>(undefined);

export const AnimeCategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [categoryResults, setCategoryResults] = useState<IAnime[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [params, setParams] = useState<IParams>({
        page: {
            limit: 12,
            offset: 12
        }
    });
    const [meta, setMeta] = useState<{ count?: number }>({});
    const [links, setLinks] = useState<{ first?: string; next?: string; last?: string }>({});

    const fetchAnimeByCategory = async () => {
        if (!selectedCategory) {
            setCategoryResults([]);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await animeService.getAnimesByCategory(selectedCategory, params);
            setCategoryResults(response.data.data || []);
            setMeta(response.data.meta || {});
            setLinks(response.data.links || {});
        } catch (err) {
            setError("Failed to fetch anime by category");
            console.error("Category fetch error:", err);
        } finally {
            setLoading(false);
        }
    };

    const goToNextPage = () => {
        if (links.next) {
            const url = new URL(links.next);
            const cursor = url.searchParams.get('page[cursor]');
            setParams(prev => ({
                ...prev,
                page: {
                    ...prev.page,
                    cursor,
                    offset: undefined
                }
            }));
        } else if (meta.count && params.page?.offset !== undefined && params.page?.limit) {
            const nextOffset = (params.page.offset || 0) + params.page.limit;
            if (nextOffset < meta.count) {
                setParams(prev => ({
                    ...prev,
                    page: {
                        ...prev.page,
                        offset: nextOffset,
                        cursor: undefined
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
                    offset: prevOffset,
                    cursor: undefined
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
                offset: 0,
                cursor: undefined
            }
        }));
    };

    const resetCategory = useCallback(() => {
        setSelectedCategory(null);
        setCategoryResults([]);
        setParams(prev => ({
            ...prev,
            page: {
                ...prev.page,
                offset: 0,
                cursor: undefined
            }
        }));
    }, []);

    const resetPagination = () => {
        setParams({
            page: {
                limit: 12, // or keep the current limit if you prefer
                offset: 0,
                cursor: undefined
            }
        });
    };

    useEffect(() => {
        fetchAnimeByCategory();
    }, [selectedCategory, params]);

    return (
        <AnimeCategoryContext.Provider value={{
            selectedCategory,
            setSelectedCategory,
            categoryResults,
            loading,
            error,
            meta,
            links,
            currentParams: params,
            setParams,
            goToNextPage,
            goToPrevPage,
            updatePageLimit,
            resetCategory,
            resetPagination
        }}>
            {children}
        </AnimeCategoryContext.Provider>
    );
};

export const useAnimeCategory = () => {
    const context = useContext(AnimeCategoryContext);
    if (!context) {
        throw new Error('useAnimeCategory must be used within an AnimeCategoryProvider');
    }
    return context;
};