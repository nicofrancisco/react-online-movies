import styled from '@emotion/styled'
import { breakpoints } from '../../Styles'

export const LogoStyle = styled.header`

  .header-logo{
    position: absolute;
    float: left;
    left:0;
    top:0;
    padding: 18px 15px 10px;
    width: 6vw;
    z-index: 100;

    @media (min-width: ${breakpoints.xs}px) {
      width: 5vh;
      padding: 18px 0px 0px;
      left: 0;
    }
    @media (min-width: ${breakpoints.sm}px) {
      width: 7vh;
      padding: 18px 18px 0px;
    }
    @media (min-width: ${breakpoints.lg}px) {
      padding: 18px 15px 10px;
      width: 6vw;
      left: 0;
    }
  }
`
