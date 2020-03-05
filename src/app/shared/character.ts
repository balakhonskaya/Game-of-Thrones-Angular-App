export interface Character {
    url: string;
    name?: string;
    aliases: string[];
    culture: string;
    born?: string;
    titles?: string[];
    gender?: string;
    thumbnails?: Thumbnail[];
    playedBy?: string[];
  }
  
  export interface Thumbnail {
    url: string;
    name?: string;
  }
  