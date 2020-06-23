import React, { useState, useEffect } from 'react'
import isUndefined from 'lodash/isUndefined'
import RatingFilter from 'react-rating'

import { MovieProps } from '../../Cards/data'
import StarActive from '../../../Assets/star-on.svg'
import StarInactive from '../../../Assets/star-off.svg'
import StarHover from '../../../Assets/star-hover.svg'

import { ResultsWrapper, Result, Link, Rating, Stars } from './styles'
interface ResultsProps {
  results: MovieProps[]
  imageBaseUrl: string
  onMouseDown: () => void
}

interface ResultProps {
  movie: MovieProps
  imageBaseUrl: string
}

const ResultPartial: React.FC<ResultProps> = (props) => {
  const { movie, imageBaseUrl: url } = props
  console.log(movie)
  return (
    <Link to={`/movie/${movie.id}`}>
      <Result.Wrapper>
        <Result.Img src={`${url}/w45/${movie.poster_path}`} />
        <Result.Body>
          <Result.Title>{movie.title}</Result.Title>
          <Result.OriginalTitle>{movie.original_title}</Result.OriginalTitle>
        </Result.Body>
      </Result.Wrapper>
    </Link>
  )
}

const Results: React.FC<ResultsProps> = (props) => {
  const { results, imageBaseUrl, onMouseDown } = props
  const [movies, setMovies] = useState(results)
  const [selection, setSelection] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (isUndefined(selection)) {
      setMovies(results)
    } else {
      const lowerLimit = selection * 2 - 2
      const upperLimit = selection * 2
      const filterMovies = results.filter((movie) => {
        if (
          movie.vote_average >= lowerLimit &&
          movie.vote_average <= upperLimit
        ) {
          return movie
        }
        return null
      })
      setMovies(filterMovies)
    }
  }, [selection, results])

  useEffect(() => {
    setMovies(() => results)
    setSelection(() => undefined)
  }, [results])

  return (
    <ResultsWrapper onMouseDown={onMouseDown}>
      <Rating.Wrapper>
        <Rating.Title>start filtering by rating! <span />
        <RatingFilter
          emptySymbol={<Stars src={StarInactive} alt="StarInactive" />}
          placeholderSymbol={<Stars src={StarHover} alt="StarHover" />}
          fullSymbol={<Stars src={StarActive} alt="StarActive" />}
          initialRating={selection}
          onClick={(selection) => {
            setSelection((prev) => {
              if (prev === selection) {
                return undefined
              }
              return selection
            })
          }
         }
        />
        </Rating.Title>
      </Rating.Wrapper>
      {movies.map((movie) => (
        <ResultPartial
          key={`result-${movie.id}`}
          movie={movie}
          imageBaseUrl={imageBaseUrl}
        />
      ))}
    </ResultsWrapper>
  )
}

export default React.memo(Results)
