export interface MovieDetailsBaseProps {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: any
  budget: number
  genres: { id: number; name: string }[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: {
    id: number
    logo_path: string
    name: string
    origin_country: string
  }[]
  production_countries: {
    iso_3166_1: string
    name: string
  }[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: any[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
export interface MovieDetailsProps {
  movieDetails: MovieDetailsBaseProps | null | undefined
}

export const Details = {
  adult: false,
  backdrop_path: '',
  belongs_to_collection: null,
  budget: 0,
  genres: [{}],
  homepage: '',
  id: 0,
  imdb_id: '',
  original_language: 'en',
  original_title: '',
  overview:
    'Some overview',
  popularity: 99.999,
  poster_path: '/someposter.jpg',
  production_companies: [{}],
  production_countries: [{}],
  release_date: '',
  revenue: 0,
  runtime: 0,
  spoken_languages: [{}],
  status: '',
  tagline: '',
  title: '',
  video: false,
  vote_average: 0,
  vote_count: 0,
}
