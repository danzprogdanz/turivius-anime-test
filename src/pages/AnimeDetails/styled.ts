import styled from "styled-components";
import { colorsCore } from "../../design-system/core/colors";
import { media } from "../../design-system/utils/mediaQueriesHelper";
import { breakpoints } from "../../design-system/constants/breakpoints";

// Styled Components
export const DetailContainer = styled.div`
  position: relative;
  width: 100%;
  color: ${colorsCore.white};
  /* padding-top: 6rem; */ /* TODO */
`;

export const CoverImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

export const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const CoverGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: linear-gradient(transparent, ${colorsCore.blue1000});
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  transform: translateY(-100px);
`;

export const MainContent = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  width: 70vw;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PosterImage = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
  border: 2px solid ${colorsCore.blue300};

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    aspect-ratio: 2/3;
  }
`;

export const DetailsSection = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${colorsCore.white};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

export const MetaInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

export const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: rgba(22, 27, 44, 0.7);
  border-radius: 8px;
  border: 1px solid ${colorsCore.blue400};
  backdrop-filter: blur(5px);
`;

export const MetaLabel = styled.span`
  font-size: 0.9rem;
  color: ${colorsCore.blue200};
  margin-bottom: 0.25rem;
`;

export const MetaValue = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${colorsCore.white};
`;

export const Synopsis = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: ${colorsCore.gray200};
`;

export const AdditionalInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const InfoGroup = styled.div`
  padding: 1rem;
  background: rgba(22, 27, 44, 0.5);
  border-radius: 6px;
  border-left: 3px solid ${colorsCore.blue400};
`;

export const InfoLabel = styled.div`
  font-size: 0.9rem;
  color: ${colorsCore.blue200};
  margin-bottom: 0.5rem;
`;

export const InfoValue = styled.div`
  font-size: 1rem;
  color: ${colorsCore.white};
  font-weight: 500;
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 70vw;
  margin-left: auto;
  margin-right: auto;

  ${media.up(breakpoints.sm)`
    flex-direction: row;
  `}

  @media (max-width: 1200px) {
    max-width: 80vw;
  }

  @media (max-width: 768px) {
    max-width: 90vw;
  }

  @media (max-width: 480px) {
    max-width: 95vw;
  }
`;

export const StatCard = styled.div<{ accent?: boolean }>`
  flex: 1;
  padding: 1.5rem;
  background: ${(props) =>
    props.accent
      ? `linear-gradient(135deg, ${colorsCore.blue800}, ${colorsCore.blue600})`
      : colorsCore.darkBlue700};
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const StatValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${colorsCore.white};
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.div`
  font-size: 1rem;
  color: ${colorsCore.blue200};
`;

export const SpinnerWrapperStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const CoverFallback = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    ${colorsCore.blue800},
    ${colorsCore.blue600}
  );
`;