import styled from '@emotion/styled'

import { breakpoints } from '../../Styles'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 1.2rem;
  padding: 0 18px;

  @media (min-width: ${breakpoints.lg}px) {
    padding: 0 6%;
  }
`

export const MoviesWrapper = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: auto;

  @media (min-width: ${breakpoints.sm}px) {
    grid-template-columns: auto auto;
  }

  @media (min-width: ${breakpoints.lg}px) {
    grid-template-columns: auto auto auto;
  }
`
