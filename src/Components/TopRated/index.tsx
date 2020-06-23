import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FadeIn from 'react-fade-in'

import Movie from '../Cards'

import { BaseUrl } from '../../config'
import { MoviesProps } from './data'
import { RootState } from '../../API/rootReducer'
import { getTopRatedMovies } from '../../API/slices'

import { Section, MoviesWrapper } from './styles'
import { Link } from 'react-router-dom'

const Movies: React.FC<MoviesProps> = (props) => {
  const { imageBaseUrl, movies } = props
  if (movies.length === 0) {
    return null
  }

  return (
    <>
      {movies.map((movie) => (

        <Link key={`popular-${movie.id}`} to={`/movie/${movie.id}`}>
         <FadeIn>
          <Movie {...movie} imageBaseUrl={imageBaseUrl} />
         </FadeIn>
        </Link>
      ))}
    </>
  )
}
const TopRated: React.FC<BaseUrl> = (props) => {
  const { imageBaseUrl } = props
  const dispatch = useDispatch()
  const { topRatedMovies } = useSelector(
    (state: RootState) => state.topRatedMovies
  )

  useEffect(() => {
    dispatch(getTopRatedMovies())
  }, [dispatch])
  return (
    <Section>
      <MoviesWrapper>
        <Movies imageBaseUrl={imageBaseUrl} movies={topRatedMovies} />
      </MoviesWrapper>
    </Section>
  )
}

export default React.memo(TopRated)
