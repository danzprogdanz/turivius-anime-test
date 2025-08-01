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
import { useCategories } from "../../hooks/api/useCategories.ts";
import { CollectionCard } from "./Card/index.tsx";

const Categories: React.FC = () => {

  const { data: categories } = useCategories()
  const navigate = useNavigate()

  return (
    <>
      <Header title={"Categories"} />
      <MainContentContainerStyled>
        <AnimesGridContainerStyled>
          {categories?.data.map((anime, index) => (
                <CollectionCard
                  collection={anime.attributes}
                  onClick={() => navigate(`${anime.attributes.slug}`)}
                />
              ))}
        </AnimesGridContainerStyled>
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

export default Categories;
