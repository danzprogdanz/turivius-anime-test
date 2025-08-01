export interface IAnime {
  id: string;
  type: string;
  links: {
    self: string;
  };
  attributes: AnimeAttributes;
  relationships: AnimeRelationships;
}

export interface AnimeAttributes {
  createdAt: string;
  updatedAt: string;
  slug: string;
  synopsis: string;
  coverImageTopOffset: number;
  titles: {
    en?: string;
    en_jp?: string;
    en_us?: string;
    ja_jp?: string;
    [key: string]: string | undefined;
  };
  description: string;
  canonicalTitle: string;
  abbreviatedTitles: string[];
  averageRating: string;
  ratingFrequencies: {
    [key: string]: string;
  };
  userCount: number;
  favoritesCount: number;
  startDate: string;
  endDate: string | null;
  nextRelease: string | null;
  popularityRank: number;
  ratingRank: number;
  ageRating: string;
  ageRatingGuide: string;
  subtype: string;
  status: string;
  tba: string | null;
  posterImage: {
    tiny: string;
    small: string;
    medium: string;
    large: string;
    original: string;
    meta: {
      dimensions: {
        tiny: Dimension;
        small: Dimension;
        medium: Dimension;
        large: Dimension;
      };
    };
  };
  coverImage: {
    tiny: string;
    small: string;
    large: string;
    original: string;
    meta: {
      dimensions: {
        tiny: Dimension;
        small: Dimension;
        large: Dimension;
      };
    };
  };
  episodeCount: number | null;
  episodeLength: number;
  totalLength: number;
  youtubeVideoId: string;
  showType: string;
  nsfw: boolean;
}

interface Dimension {
  width: number | null;
  height: number | null;
}

interface AnimeRelationships {
  genres: RelationshipLink;
  categories: RelationshipLink;
  castings: RelationshipLink;
  installments: RelationshipLink;
  mappings: RelationshipLink;
  reviews: RelationshipLink;
  mediaRelationships: RelationshipLink;
  characters: RelationshipLink;
  staff: RelationshipLink;
  productions: RelationshipLink;
  quotes: RelationshipLink;
  episodes: RelationshipLink;
  streamingLinks: RelationshipLink;
  animeProductions: RelationshipLink;
  animeCharacters: RelationshipLink;
  animeStaff: RelationshipLink;
}

interface RelationshipLink {
  links: {
    self: string;
    related: string;
  };
}