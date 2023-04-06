export interface Image {
  id: number;
  type: Type;
  main: boolean;
  resolutions: Resolutions;
}

export interface Resolutions {
  original: Medium;
  medium?: Medium;
}

export interface Medium {
  url: string;
  width: number;
  height: number;
}

export enum Type {
  Background = "background",
  Poster = "poster",
}
