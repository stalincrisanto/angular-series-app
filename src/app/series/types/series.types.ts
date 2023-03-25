export interface SerieScore {
  score: number;
  show: Serie;
}

export interface Serie {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  //   runtime: null;
//   averageRuntime: null;
  //   premiered: null;
  //   ended: null;
  //   officialSite: null;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  //   webChannel: null;
  //   dvdCountry: null;
//   externals: Externals;
  image: { medium: string; original: string };
  summary: string;
  updated: number;
  _links: Links;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

// export interface Externals {
//   tvrage: null;
//   thetvdb: null;
//   imdb: null;
// }

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Rating {
  average: number;
}

export interface Schedule {
  time: string;
  days: any[];
}
