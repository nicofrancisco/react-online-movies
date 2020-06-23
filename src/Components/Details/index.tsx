import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import isUndefined from 'lodash/isUndefined'
import isNul from 'lodash/isNull'
import FadeIn from 'react-fade-in'

import { RootState } from '../../API/rootReducer'
import { getMovieDetails, resetMovieDetails } from '../../API/slices'
import { Film } from './styles'

const Details: React.FC<any> = (props) => {
  const strokeDash = 339.292;
  const { imageBaseUrl, movieId } = props
  const imgWrapperRef = useRef<HTMLDivElement>(null)
  const [offsetHeight, setOffsetHeight] = useState(0)
  const [animateMeter, setAnimameter] = useState(false)
  let { movieDetails } = useSelector((state: RootState) => state.movieDetails)

  const dispatch = useCallback(useDispatch(), [])

  const getImageOffsetHeight = () => {
    const offsetHeight = imgWrapperRef.current?.offsetHeight || 0
    setOffsetHeight(offsetHeight)
  }

  const handleLoaded = () => {
    scrollToTop();
    console.log(movieDetails)
    getImageOffsetHeight()
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  }

  useEffect(() => {
    setTimeout(() => {
      setAnimameter(true);
    }, 1000);
  }, [])

  useEffect(() => {
    dispatch(getMovieDetails(movieId))
    //clear redux store when unmounting Detail
    return () => {
        dispatch(resetMovieDetails())
    }
  }, [dispatch, movieId])

  useEffect(() => {
    getImageOffsetHeight()
  }, [])//window.innerWidth

  if (isUndefined(movieDetails)) {
    return <h1>404</h1>
  }

  if (isNul(movieDetails)) {
    return null
  }
      return (
          <Film.Section height={offsetHeight}>
            <Film.ImgWrapper ref={imgWrapperRef}>
            <FadeIn>
              <Film.Img
                src={`${imageBaseUrl}/original/${movieDetails.backdrop_path}`}
                alt={movieDetails.title}
                onLoad={handleLoaded}
              />
             </FadeIn>
            </Film.ImgWrapper>
            <Film.Wrapper>
              <Film.Title>{movieDetails.title}</Film.Title>
              <Film.SubTitle>{movieDetails.tagline}</Film.SubTitle>
              <Film.Description height={offsetHeight}>
                <Film.Genres>
                  {movieDetails.genres.map(
                    (genre: {
                      id: string | number | undefined
                      name: React.ReactNode
                    }) => (
                      <Film.Genre key={genre.id}>{genre.name}</Film.Genre>
                    )
                  )}
                </Film.Genres>
                <Film.Rate>
                      <span>{movieDetails.vote_average}</span>
                      <svg className={"scoreMeter"}>
                        <circle className={"scoreMeterCircle"} />
                        <circle
                          className={"scoreMeterValue"}
                          style={{
                            strokeDasharray: strokeDash.toString(),
                            strokeDashoffset:
                              strokeDash - strokeDash * (animateMeter ? movieDetails.vote_average / 10 : 0)
                          }}
                        />
                      </svg>
                  </Film.Rate>
                <Film.Synapsis>

                  <Film.Parragraph>{movieDetails.overview}</Film.Parragraph>
                </Film.Synapsis>
              </Film.Description>
            </Film.Wrapper>
          </Film.Section>
      )
}

export default React.memo(Details)
