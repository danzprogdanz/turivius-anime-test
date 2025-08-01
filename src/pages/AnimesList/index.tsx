import React, { useEffect, useState } from "react";
import Header from "../../components/common/Header/index.tsx";
import styled from "styled-components";
import { colorsCore } from "../../design-system/core/colors.ts";
import { AnimeCard } from "../Home/AnimeCard/index.tsx";
import { useNavigate } from "react-router-dom";
import PaginationBar from "../../components/common/paginationBar/index.tsx";
import { media } from "../../design-system/utils/mediaQueriesHelper.ts";
import { breakpoints } from "../../design-system/constants/breakpoints.ts";
import { useAnimes } from "../../hooks/api/useAnimes.ts";
import { AnimeCardSkeleton } from "../Home/AnimeCardSkelleton/indexs.tsx";
import { useIsMobile } from "../../hooks/useMediaQuery.ts";

const AnimesList: React.FC = () => {
const isMobile = useIsMobile();

  const { animes, meta, links, currentParams, setParams, loading } =
    useAnimes();

  const [animeId, setAnimeId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (animeId) {
      navigate(`${animeId}`);
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
            offset: undefined, // Clear offset to ensure cursor is used
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
      <Header title={"Animes"} />
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
            : animes.map((anime, index) => (
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

export const MainContentContainerStyled = styled.div`
  margin: 2rem 0 8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center; // This centers child elements horizontally
`;

export const AnimesGridContainerStyled = styled.div`
  position: relative;
  width: calc(100% - 4rem);
  margin: 0 auto; // This centers the container horizontally
  color: ${colorsCore.white};
  display: grid;
  grid-template-columns: repeat(1, fit-content(100%));
  grid-template-rows: auto;
  justify-content: center; // This centers the grid items within the container
  gap: 2rem;

  ${media.up(breakpoints.xs)`
       
        `}

  ${media.up(breakpoints.sm)`
            grid-template-columns: repeat(2, fit-content(100%));

        `}
    
    
       ${media.up(breakpoints.md)`
       `}
    
       ${media.up(breakpoints.lg)`

        `}

        ${media.up(breakpoints.xl)`
                       grid-template-columns: repeat(3, fit-content(100%));

        `}

        ${media.up(breakpoints.xxl)`

        `}
`;

export default AnimesList;
