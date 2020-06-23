import { Link as BaseLink } from 'react-router-dom'

import styled from '@emotion/styled'
// import { css } from '@emotion/core'
// import { breakpoints } from 'Styles'

export const ResultsWrapper = styled.div`
  background-color: white;
  height: auto;
  left: 50%;
  max-height: 470px;
  overflow-y: scroll;
  position: absolute;
  transform: translateX(-50%);
  width: calc(100% - 40px);
  box-shadow: 0 5px 5px 5px rgba(0,0,0,0.25);
`

const ResultWrapper = styled.div`
  border-bottom: #cdcccc 1px solid;
  display: flex;
  height: auto;
  padding: 14px;
  width: auto;

  &:hover {
    background-color: #f5f4f4;
  }
`

const ResultTitle = styled.h4`
  font-size: 16px;
  margin: 0;
`

const ResultOriginalTitle = styled.p`
  display: block;
  line-height: 1.5;
  flex-basis: 100%;
  font-size: 14px;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #737373;
`
const imgWidth = 45
const imgMargin = 12
const ResultImg = styled.img`
  object-fit: none;
  width: ${imgWidth}px;
  height: auto;
  margin-right: ${imgMargin}px;
  border-radius: .35em;
`

const ResultBody = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100% - ${imgWidth}px - ${imgMargin}px);
`

export const Result = {
  Wrapper: ResultWrapper,
  Img: ResultImg,
  Body: ResultBody,
  Title: ResultTitle,
  OriginalTitle: ResultOriginalTitle,
}

export const Link = styled(BaseLink)`
  color: black;
  text-decoration: none;
`

const RatingWrappers = styled.div`
  background: #fefefe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  position: sticky;
  top: 0;
  width: auto;
`

const RatingTitle = styled.h3`
  font-size: 20px;
  text-align: left;
  color: #2a2929;
  padding-left: 5px;
  padding-right: 5px;
  margin-top: 5px;
`

export const Rating = {
  Wrapper: RatingWrappers,
  Title: RatingTitle,
}

const starSize = 23
export const Stars = styled.img`
  width: ${starSize}px;
  height: ${starSize}px;
`
