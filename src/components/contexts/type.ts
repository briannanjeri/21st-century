export interface data {
  id: string;
  type: string;
  categories: string[];
  title: string;
  image: string;
  rating: number;
  Availability: string[];
}

export interface MovieProp {
  movie: data;
}
