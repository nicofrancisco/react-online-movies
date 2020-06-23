import React from 'react'
import { Card, Text } from './styles'
import { MovieProps } from './data'
import FadeIn from 'react-fade-in'

const Movie: React.FC<MovieProps> = (props) => {
  const { imageBaseUrl, ...movie } = props

  return (
      <Card>
      <FadeIn>
        <img
          src={`${imageBaseUrl}/w300/${movie.poster_path}`}
          alt={movie.title}
        />
      </FadeIn>
        <Text>{movie.title}</Text>
      </Card>
  )
}

export default React.memo(Movie)
