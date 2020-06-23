import styled from '@emotion/styled'
import { breakpoints } from '../../Styles'

export const Toolbar = styled.header`
  display: flex;
  flex-direction: column;
  height: 10vh;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 1;

  @media (min-width: ${breakpoints.lg}px) {
    height: 100px;
  }

  &::after {
    content: '';
    background-color: #2a2929;
    background-position: 50%;
    background-size: cover;
    height: 100%;
    left: 0;
    opacity: 1;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    box-shadow: 0 5px 5px rgba(0,0,0,1);
  }
`

export const SearchWrapper = styled.div`
  margin: auto;
  width: 80%;

  @media (min-width: ${breakpoints.sm}px) {
    width: 350px;
  }

  @media (min-width: ${breakpoints.lg}px) {
    width: 550px;
  }
`
