import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import get from 'lodash/get'
import isNil from 'lodash/isNil'
import FadeIn from 'react-fade-in'

import Details from '../../Components/Details'
import { RootState } from '../../API/rootReducer'
import { MovieWrapper } from './styles'

interface MoviePageProps {}
const MoviePage: React.FC<MoviePageProps> = () => {
  const match = useRouteMatch('/movie/:id') as any

  const { images } = useSelector((state: RootState) => state.configSlice)
  const imageBaseUrl = get(images, 'images.secure_base_url', '')

  const movieId = get(match, 'params.id', null)
  if (isNil(movieId)) {
    return null
  }

  return (
    <FadeIn>
      <MovieWrapper>
        <Details movieId={movieId} imageBaseUrl={imageBaseUrl} />
      </MovieWrapper>
    </FadeIn>
  )
}

export default MoviePage
