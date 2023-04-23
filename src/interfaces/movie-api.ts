export interface ShortDescMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface InCinemaRes {
  dates: { maximum: string, minimum: string };
  page: number;
  results: ShortDescMovie[];
  total_pages: number;
  total_results: number;
}

interface Genres {
  'id': number;
  'name': string;
}

interface ProductionCompany {
  'id': number;
  'logo_path': string | null;
  'name': string;
  'origin_country': string;
}

interface ProductionCountry {
  'iso_3166_1': string;
  'name': string;
}

interface SpokenLanguage {
  'iso_639_1': string;
  'name': string;
}

export interface ExtendedDescMovie {
  'adult': boolean;
  'backdrop_path': string | null;
  'belongs_to_collection': null;
  'budget': number;
  'genres': Genres[];
  'homepage': string | null;
  'id': number;
  'imdb_id': string | null;
  'original_language': string;
  'original_title': string;
  'overview': string | null;
  'popularity': number;
  'poster_path': string | null;
  'production_companies': ProductionCompany[];
  'production_countries': ProductionCountry[];
  'release_date': string;
  'revenue': number;
  'runtime': number | null;
  'spoken_languages': SpokenLanguage[];
  'status': string;
  'tagline': string | null;
  'title': string;
  'video': boolean;
  'vote_average': number;
  'vote_count': number;
}
