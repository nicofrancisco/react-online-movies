import { AnyAction, Dispatch, PayloadAction, createSlice} from '@reduxjs/toolkit'
import get from 'lodash/get'
import isUndefined from 'lodash/isUndefined'
import { MovieProps } from '../Components/Cards/data'
import { MovieDetailsProps, MovieDetailsBaseProps } from '../Components/Details/data'
import TheMovieDBApi from './themoviedb.api'
import { AppThunk } from './store'

type configProps = { images: object }
let configState: configProps = { images: {} }

const configSlice = createSlice({
  name: 'GET_CONFIG',
  initialState: configState,
  reducers: {
    setConfig(state, action: PayloadAction<object>) {
      state.images = action.payload
    },
  },
})

export const getConfiguration = (): AppThunk => async (
  dispatch: Dispatch<AnyAction>
): Promise<void> => {
  const response: any = await TheMovieDBApi.getConfiguration()
  dispatch(setConfig(response))
}

export const { setConfig } = configSlice.actions

interface topRatedMovieProps {
  topRatedMovies: MovieProps[]
}
let topRatedMovieState: topRatedMovieProps = {
  topRatedMovies: [],
}

const topRatedMovieSlice = createSlice({
  name: 'GET_TOP_RATED_MOVIES',
  initialState: topRatedMovieState,
  reducers: {
    setTopRatedMovies(state, action: PayloadAction<MovieProps[]>) {
      state.topRatedMovies = [].concat(action.payload as any) as MovieProps[]
    },
  },
})

export const getTopRatedMovies = (): AppThunk => async (
  dispatch: Dispatch<AnyAction>
): Promise<void> => {
  const response: any = await TheMovieDBApi.getTopRatedMovies()
  const result = get(response, 'results', [])
  dispatch(setTopRatedMovies(result))
}
export const { setTopRatedMovies } = topRatedMovieSlice.actions

const movieDetailSlice = createSlice({
  name: 'GET_MOVIE_DETAIL',
  initialState: { movieDetails: null } as MovieDetailsProps,
  reducers: {
    setMovieDetails(state, action: PayloadAction<MovieDetailsBaseProps>) {
      state.movieDetails = isUndefined(action.payload)
        ? undefined
        : { ...action.payload }
    },
    clearMovieDetails(state, action: PayloadAction) {
      state.movieDetails = undefined;
    }
  },
})
export const getMovieDetails = (movieId: number): AppThunk => async (
  dispatch: Dispatch<AnyAction>
): Promise<void> => {
  const response = await TheMovieDBApi.getMovieDetails(movieId)
  dispatch(setMovieDetails(response))
}
export const resetMovieDetails = (): AppThunk => async (
  dispatch: Dispatch<AnyAction>
): Promise<void> => {
  dispatch(clearMovieDetails())
}
export const { setMovieDetails, clearMovieDetails } = movieDetailSlice.actions

const searchSlice = createSlice({
  name: 'SEARCH_MOVIES',
  initialState: {} as any,
  reducers: {
    setSearchedMovies(state, action: PayloadAction<MovieProps[]>) {
      state.search = [].concat(action.payload as any) as MovieProps[]
    },
    resetSearch(state) {
      state.search = [] as MovieProps[]
    },
  },
})
export const searchMovies = (movieToSearch: string): AppThunk => async (
  dispatch: Dispatch<AnyAction>
): Promise<void> => {
  const response = await TheMovieDBApi.search(movieToSearch)
  const result = get(response, 'results', [])

  dispatch(setSearchedMovies(result))
}
export const { setSearchedMovies, resetSearch } = searchSlice.actions
export const reducers = {
  configSlice: configSlice.reducer,
  topRatedMovies: topRatedMovieSlice.reducer,
  movieDetails: movieDetailSlice.reducer,
  search: searchSlice.reducer,
}
