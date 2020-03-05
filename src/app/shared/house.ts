export interface House {
    url: string;
    name?: string;
    region?: string;
    words?: string;
    currentLord?: string;
    heir?: string;
    coatOfArms?: string;
    thumbnails?: Thumbnail[];
    swornMembers?: string[];
  }
  
  export interface Thumbnail {
    url: string;
    name?: string;
  }