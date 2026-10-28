export interface Movie {
  id: number;
  title: string;
  poster: string;
  backdrop?: string;
  rating: number;
  year: number;
  genre: string;
  description: string;
  duration?: string;
  language?: string;
  quality?: string;
}