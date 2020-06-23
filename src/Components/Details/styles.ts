import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { breakpoints } from '../../Styles'

interface HeightProps {
  height: number
}
const FilmSection = styled.section<HeightProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: ${(p) => (p.height === 0 ? 'auto' : `${p.height}px`)};
  padding-bottom: 250px;
  position: relative;
  width: 100%;
`

const FilmImage = styled.img`
  background-color: #80808087;
  object-fit: cover;
  width: 100%;
  height: auto;
`

const FilmWrapperImage = styled.div`
  position: absolute;
  width: 100%;
`

const FilmWrapper = styled.div`
  color: white;
  height: 100%;
  margin: 0 auto;
  max-width: 80%;
  position: relative;
  text-align: center;
  width: 100%;
  z-index: 1;
`

const FilmTitle = styled.h1`
  margin: 0;
  padding-top: 30px;
  font-size: 27px;
  font-family: Verdana;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.5);

  @media (min-width: ${breakpoints.sm}px) {
    padding-top: 10%;
    font-size: 80px;
    font-family: Verdana;
  }

  @media (min-width: ${breakpoints.lg}px) {
    padding-top: 150px;
  }
`

const FilmSubTitle = styled.h2`
  font-size: 16px;
  font-family: Verdana;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.5);

  @media (min-width: ${breakpoints.sm}px) {
    font-size: 30px;
    font-family: Verdana;
  }
`

const FilmDescription = styled.div<HeightProps>`
  background-color: white;
  border-radius: 3em;
  box-shadow: 0px 4px 15px -4px rgba(0, 0, 0, 0.5);
  font-family: Verdana;
  font-size: 12px;
  color: black;
  height: 20%;
  height: auto;
  width: 100%;
  left: 100px;
  right: 100px;
  padding: 40px 20px 20px;
  line-height: 165%;
  position: sticky;
  ${(p) => css`
    top: calc(${p.height}px - 80%);
  `};

  @media (max-width: ${breakpoints.lg}px) {
    ${(p) => css`
      top: calc(${p.height}px - 55%);
    `};
  }
  @media (max-width: ${breakpoints.sm}px) {
    ${(p) => css`
      top: calc(${p.height}px - 50%);
    `};
  }
`

const FilmGenres = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: end;
`
const FilmGenre = styled.li`
  background-color: #343a40;
  color: white;
  display: inline-block;
  font-weight: bold;
  margin-bottom: 6px;
  margin-right: 10px;
  padding: 4px 20px;
  border-radius: 6px;
`

const FilmSynapsis = styled.div`
  margin-top: 30px;
  text-align: left;
  display: flex;
  justify-content: flex-start;
`
const FilmRate = styled.div`

  flex-basis: 14%;
  align-self: center;
  position: relative;

  span {
  text-align: center;
  display: block;
  font-weight: 400;
  font-size: 50px;
  position: absolute;
  height: 120px;
  line-height: 120px;
  width: 120px;
  }

  width: 120px;
  height: 120px;
  viewbox: "0 0 120 120";

  .scoreMeter circle {
  stroke-width: 8px;
  fill: transparent;
  cx: 60;
  cy: 60;
  r: 54;
  }

  stroke: var(--bgcolor);
  .scoreMeterValue {
  stroke: #f77a52;
  transition: 1s stroke-dashoffset cubic-bezier(0.76, 0.21, 0.38, 0.88);
}`

const FilmParragraph = styled.p`
  width: 60%;
`

export const Film = {
  ImgWrapper: FilmWrapperImage,
  Img: FilmImage,
  Genres: FilmGenres,
  Genre: FilmGenre,
  Description: FilmDescription,
  Section: FilmSection,
  SubTitle: FilmSubTitle,
  Title: FilmTitle,
  Wrapper: FilmWrapper,
  Synapsis: FilmSynapsis,
  Rate: FilmRate,
  Parragraph: FilmParragraph,
}
