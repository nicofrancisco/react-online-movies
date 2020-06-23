import { BaseUrl } from '../../config'
import { MovieProps } from '../Cards/data'

export interface MoviesProps extends BaseUrl {
  movies: MovieProps[]
}
