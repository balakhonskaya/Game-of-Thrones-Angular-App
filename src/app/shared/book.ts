export interface Book {
  url: string;
  isbn: string;
  name: string;
  authors: string[];
  numberOfPages: number;
  povCharacters?: string[];
  publisher?: string;
  thumbnails?: Thumbnail[];
  country?: string;
}

export interface Thumbnail {
  url: string;
  name?: string;
}
