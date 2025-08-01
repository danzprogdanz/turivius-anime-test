import type { IAnime } from "../../../api/types/AnimeResponse";

export interface Anime {
  id: number;
  title: string;
  image: string;
  rating: number;
  episodes: number;
  status: 'ongoing' | 'completed' | 'upcoming';
  genre: string[];
  synopsis: string;
}

export type AnimeCardProps = {
  anime: IAnime;
  variant?: 'default' | 'compact' | 'featured';
  onFetchAnime: (id: string) => void
};