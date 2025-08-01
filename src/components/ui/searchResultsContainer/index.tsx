import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { IProps } from './types';
import { AnimeCover, AnimeDetails, AnimeInfo, AnimeTitle, ErrorMessage, LoadingMessage, NoResultsMessage, ResultItem, SearchResultsContainer } from './styled';


const SearchResults: React.FC<IProps> = ({
    results,
    loading,
    error,
    searchTerm,
    hasMore,
    loadMore,
    onClose
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const loaderRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    // Handle infinite scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const firstEntry = entries[0];
                if (firstEntry.isIntersecting && hasMore && !loading) {
                    loadMore();
                }
            },
            { threshold: 0.1 }
        );

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [hasMore, loading, loadMore]);

    useEffect(() => {
        setIsVisible(searchTerm.length > 0 && !error);
    }, [searchTerm, error]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isVisible, onClose]);

    const handleSelectItem = (id: string) => {
        navigate(`home/animes/${id}`)
        setIsVisible(false)
    }

    return (
        <SearchResultsContainer $isVisible={isVisible} ref={containerRef}>
            {loading && results.length === 0 ? (
                <LoadingMessage>Searching...</LoadingMessage>
            ) : error ? (
                <ErrorMessage>{error}</ErrorMessage>
            ) : results.length === 0 ? (
                <NoResultsMessage>No results found</NoResultsMessage>
            ) : (
                <>
                    {results.map((anime: any, index: number) => (
                        <ResultItem key={index} onClick={() => handleSelectItem(anime.id)}>
                            <AnimeCover>
                                {anime.attributes.posterImage?.small && (
                                    <img
                                        src={anime.attributes.posterImage.small}
                                        alt={anime.attributes.canonicalTitle}
                                    />
                                )}
                            </AnimeCover>
                            <AnimeInfo>
                                <AnimeTitle>{anime.attributes.canonicalTitle}</AnimeTitle>
                                <AnimeDetails>
                                    {anime.attributes.showType} • {anime.attributes.status} • {anime.attributes.episodeCount || '?'} eps
                                </AnimeDetails>
                            </AnimeInfo>
                        </ResultItem>
                    ))}

                    {loading && results.length > 0 && (
                        <LoadingMessage>Loading more...</LoadingMessage>
                    )}

                    <div ref={loaderRef} style={{ height: '1px' }} />

                    {!hasMore && results.length > 0 && (
                        <NoResultsMessage>No more results</NoResultsMessage>
                    )}
                </>
            )}
        </SearchResultsContainer>
    );
};

export default SearchResults;