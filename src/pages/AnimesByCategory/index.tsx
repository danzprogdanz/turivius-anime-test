import React, { useEffect, useState } from "react";
import Header from "../../components/common/Header/index.tsx";
import { AnimeCard } from "../Home/AnimeCard/index.tsx";
import { useNavigate, useParams } from "react-router-dom";
import PaginationBar from "../../components/common/paginationBar/index.tsx";
import { useAnimeCategory } from "../../context/AnimeCategoryProvider.tsx";
import { AnimesGridContainerStyled } from "../AnimesList/index.tsx";
import { AnimeCardSkeleton } from "../Home/AnimeCardSkelleton/indexs.tsx";
import { MainContentContainerStyled } from "./styled.ts";

const AnimesByCategory: React.FC = () => {
  const {
    categoryResults,
    selectedCategory,
    setSelectedCategory,
    loading,
    meta,
    links,
    currentParams,
    setParams,
  } = useAnimeCategory();

  const { category } = useParams();

  useEffect(() => {
    if(category) {
      setSelectedCategory(category)
    }
  }, [category])

  const [animeId, setAnimeId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (animeId) {
      navigate(`/home/animes/${animeId}`); 
      setAnimeId(null); 
    }
  }, [animeId, navigate]);

  const getCurrentPage = () => {
    if (currentParams.page?.offset !== undefined && currentParams.page?.limit) {
      return (
        Math.floor(
          (currentParams.page.offset || 0) / currentParams.page.limit
        ) + 1
      );
    }
    return 1;
  };

  const currentPage = getCurrentPage();
  const totalPages = meta.count
    ? Math.ceil(meta.count / (currentParams.page?.limit || 20))
    : 1;

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;

    // Handle first page
    if (page === 1) {
      if (links.first) {
        const url = new URL(links.first);
        const cursor = url.searchParams.get("page[cursor]");
        setParams((prev) => ({
          ...prev,
          page: {
            ...prev.page,
            cursor,
            offset: undefined,
          },
        }));
      } else {
        setParams((prev) => ({
          ...prev,
          page: {
            ...prev.page,
            offset: 0,
            cursor: undefined,
          },
        }));
      }
      return;
    }

    // Handle last page
    if (page === totalPages) {
      if (links.last) {
        const url = new URL(links.last);
        const cursor = url.searchParams.get("page[cursor]");
        if (cursor) {
          setParams((prev) => ({
            ...prev,
            page: {
              ...prev.page,
              cursor,
              offset: undefined, // Ensure we're using cursor only
            },
          }));
          return;
        }
      }

      // Fallback to offset-based if no cursor available
      if (currentParams.page?.limit && meta.count) {
        const lastPageOffset = Math.max(
          0,
          Math.floor((meta.count - 1) / currentParams.page.limit) *
            currentParams.page.limit
        );
        setParams((prev) => ({
          ...prev,
          page: {
            ...prev.page,
            offset: lastPageOffset,
            cursor: undefined,
          },
        }));
      }
      return;
    }

    // Handle intermediate pages
    if (currentParams.page?.limit) {
      const newOffset = (page - 1) * currentParams.page.limit;
      setParams((prev) => ({
        ...prev,
        page: {
          ...prev.page,
          offset: newOffset,
          cursor: undefined,
        },
      }));
    }
  };

  return (
    <>
      <Header title={selectedCategory?.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ') ?? ""} />
      <MainContentContainerStyled>
        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <AnimesGridContainerStyled>
          {loading
            ? Array.from({ length: 12 }).map((_, index) => (
                <AnimeCardSkeleton key={index} />
              ))
            : categoryResults.map((anime, index) => (
                <AnimeCard
                  key={index}
                  anime={anime}
                  onFetchAnime={setAnimeId}
                />
              ))}
        </AnimesGridContainerStyled>
        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </MainContentContainerStyled>
    </>
  );
};

export default AnimesByCategory;
