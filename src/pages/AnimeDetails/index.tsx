import React, { useEffect } from "react";
import Header from "../../components/common/Header/index.tsx";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../components/common/icons/LoadingSpinner.tsx";
import { dateFormatter } from "../../utils/dateFormatter.ts";
import { useAnime } from "../../hooks/api/useAnime.ts";
import { AdditionalInfo, ContentWrapper, CoverFallback, CoverGradient, CoverImage, CoverImageContainer, DetailContainer, DetailsSection, InfoGroup, InfoLabel, InfoValue, MainContent, MetaInfo, MetaItem, MetaLabel, MetaValue, PosterImage, SpinnerWrapperStyled, StatCard, StatLabel, StatsContainer, StatValue, Synopsis, Title } from "./styled.ts";

const AnimeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: anime } = useAnime(id || "");

  if (!anime)
    return (
      <SpinnerWrapperStyled>
        <LoadingSpinner />
      </SpinnerWrapperStyled>
    );

  const attributes = anime.attributes;
  const posterImage =
    attributes.posterImage?.large ||
    attributes.posterImage?.medium ||
    attributes.posterImage?.original;
  const coverImage =
    attributes.coverImage?.large ||
    attributes.coverImage?.original ||
    posterImage;

  const renderCoverImage = () => {
    if (attributes.coverImage) {
      return (
        <>
          <CoverImage src={coverImage} alt={attributes.canonicalTitle} />
          <CoverGradient />
        </>
      );
    }
    return <CoverFallback />;
  };


  return (
    <>
      <Header title={attributes?.canonicalTitle ?? ""} subtitle={attributes?.titles?.ja_jp}/>
      <DetailContainer>
        <CoverImageContainer>{renderCoverImage()}</CoverImageContainer>

        <ContentWrapper>
          <MainContent>
            <PosterImage src={posterImage} alt={attributes.canonicalTitle} />

            <DetailsSection>
              <Title>{attributes?.titles?.en ?? attributes?.titles?.en_jp}</Title>

              <MetaInfo>
                <MetaItem>
                  <MetaLabel>Rating</MetaLabel>
                  <MetaValue>{attributes.averageRating || "N/A"}</MetaValue>
                </MetaItem>
                <MetaItem>
                  <MetaLabel>Rank</MetaLabel>
                  <MetaValue>#{attributes.ratingRank || "N/A"}</MetaValue>
                </MetaItem>
                <MetaItem>
                  <MetaLabel>Episodes</MetaLabel>
                  <MetaValue>{attributes.episodeCount || "N/A"}</MetaValue>
                </MetaItem>
                <MetaItem>
                  <MetaLabel>Status</MetaLabel>
                  <MetaValue>{attributes.status}</MetaValue>
                </MetaItem>
              </MetaInfo>

              <Synopsis>{attributes.synopsis}</Synopsis>

              <AdditionalInfo>
                <InfoGroup>
                  <InfoLabel>Start Date</InfoLabel>
                  <InfoValue>{dateFormatter(attributes.startDate)}</InfoValue>
                </InfoGroup>
                {attributes.endDate && (
                  <InfoGroup>
                    <InfoLabel>End Date</InfoLabel>
                    <InfoValue>{dateFormatter(attributes.endDate)}</InfoValue>
                  </InfoGroup>
                )}
                <InfoGroup>
                  <InfoLabel>Age Rating</InfoLabel>
                  <InfoValue>
                    {attributes.ageRating} ({attributes.ageRatingGuide})
                  </InfoValue>
                </InfoGroup>
                <InfoGroup>
                  <InfoLabel>Type</InfoLabel>
                  <InfoValue>{attributes.showType}</InfoValue>
                </InfoGroup>
              </AdditionalInfo>
            </DetailsSection>
          </MainContent>

          <StatsContainer>
            <StatCard>
              <StatValue>{attributes.userCount.toLocaleString()}</StatValue>
              <StatLabel>Users</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>
                {attributes.favoritesCount.toLocaleString()}
              </StatValue>
              <StatLabel>Favorites</StatLabel>
            </StatCard>
            <StatCard accent>
              <StatValue>{attributes.popularityRank}</StatValue>
              <StatLabel>Popularity Rank</StatLabel>
            </StatCard>
          </StatsContainer>
        </ContentWrapper>
      </DetailContainer>
    </>
  );
};



export default AnimeDetails;
