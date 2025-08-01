
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AnimeCard } from "../AnimeCard";
import type { IAnime } from "../../../api/types/AnimeResponse";
import { media } from "../../../design-system/utils/mediaQueriesHelper";
import { breakpoints } from "../../../design-system/constants/breakpoints";

interface IProps {
  trendings: IAnime[];
  onFetchAnime: (id: string) => void;
  onSeeMore: () => void;
}

export const SectionRootStyled = styled.section`
  height: 120vh;
  padding: 1rem 2rem;
  background: linear-gradient(to bottom, #000c359a, transparent);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 80vw;
  position: relative;

  ${media.up(breakpoints.xs)`
    `}

  ${media.up(breakpoints.sm)`
    width: 70vw;
    padding: 0rem 15vw;
    `}
    
    
    ${media.up(breakpoints.md)`
      height: calc(110vh - 70px);
    `}
    
    ${media.up(breakpoints.lg)`
    `}
`;

export const TopContainerStyled = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleStyled = styled.p`
  color: #c3c4c6;
  font-weight: 600;
`;

export const SeeMoreStyled = styled.button`
  all: unset;
  color: #ffd100;
  font-weight: 700;
  opacity: 0.8;
  font-size: 0.8rem;

  &:hover {
    opacity: 1;
    color: #f1d15d;
    cursor: pointer;
    text-decoration: underline;
  }

  &:active {
    color: #5e4600;
  }
`;

export const CarrouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  gap: 2rem;
  height: fit-content;
  width: 100%;
  align-items: center;
  padding-top: 0.4rem;
  position: relative;
  scroll-behavior: smooth;
`;

export const CarrouselWrapper = styled.div`
  display: flex;
  width: fit-content;
  gap: 2rem;
  align-items: flex-start;
  transition: transform 0.5s ease;
`;

const NavButton = styled.button`
  all: unset;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  background-color: #f1d15d7b;
  color: #000000;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    background: #f1d15d;
    cursor: pointer;
    text-decoration: underline;
  }

  &:active {
    background: #5e4600;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const PrevButton = styled(NavButton)`
  left: -50px;
  
  ${media.down(breakpoints.md)`
    left: -30px;
  `}
`;

const NextButton = styled(NavButton)`
  right: -50px;
  
  ${media.down(breakpoints.md)`
    right: -30px;
  `}
`;

export const CarrouselRootContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`;

const TrendingSection: React.FC<IProps> = ({
  trendings,
  onFetchAnime,
  onSeeMore,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardTranslateValue, setCardTranslateValue] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardsToScroll = 1; 

  const totalCards = trendings.length + 2;

  // Dynamically determines how many cards are visible based on screen width
  const getCardsToShow = () => {
    if (typeof window === 'undefined') return 5;
    const width = window.innerWidth;
    if (width < 576) return 1;
    if (width < 768) return 2;
    if (width < 992) return 3;
    if (width < 1200) return 4;
    return 5;
  };

  useEffect(() => {
    const updateCardTranslateValue = () => {
      if (wrapperRef.current && wrapperRef.current.firstChild) {
        const card = wrapperRef.current.firstChild as HTMLElement;
        const gap = parseFloat(window.getComputedStyle(wrapperRef.current).gap || '0');
        setCardTranslateValue(card.offsetWidth + gap);
      }
    };

    updateCardTranslateValue();
    window.addEventListener('resize', updateCardTranslateValue);
    
    return () => {
      window.removeEventListener('resize', updateCardTranslateValue);
    };
  }, [trendings]);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - cardsToScroll));
  };

  const handleNext = () => {
    const visibleCards = getCardsToShow();
    const newIndex = Math.min(totalCards - visibleCards, currentIndex + cardsToScroll);
    setCurrentIndex(newIndex);
  };

  const transformValue = currentIndex * cardTranslateValue;

  if (!trendings || trendings.length === 0) {
    return <div>Loading trending anime...</div>;
  }

  const visibleCards = getCardsToShow();
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= totalCards - visibleCards;

  return (
    <SectionRootStyled>
      <TopContainerStyled>
        <TitleStyled>Animes populares</TitleStyled>
        <SeeMoreStyled onClick={onSeeMore}>VER TODOS &#11208;</SeeMoreStyled>
      </TopContainerStyled>
      <CarrouselRootContainer>
        <PrevButton
          onClick={handlePrev}
          disabled={isPrevDisabled}
          aria-label="Previous"
        >
          &#10094;
        </PrevButton>
        <CarrouselContainer>
          <CarrouselWrapper
            ref={wrapperRef}
            style={{ transform: `translateX(-${transformValue}px)` }}
          >
            {trendings.map((anime, index) => (
              <AnimeCard
                key={anime.id || index}
                anime={anime}
                onFetchAnime={onFetchAnime}
              />
            ))}
          </CarrouselWrapper>
        </CarrouselContainer>
        <NextButton
          onClick={handleNext}
          disabled={isNextDisabled}
          aria-label="Next"
        >
          &#10095;
        </NextButton>
      </CarrouselRootContainer>
    </SectionRootStyled>
  );
};

export default TrendingSection;