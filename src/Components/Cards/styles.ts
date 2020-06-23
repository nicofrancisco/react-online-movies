import styled from '@emotion/styled'

export const Card = styled.div`
  /*background-color: #000;*/
  margin: auto;
  overflow: hidden;
  position: relative;
  border-radius: 1em;

  img {
    width: 100%;
    height: auto;
    transition: transform 0.5s cubic-bezier(0.15, 1, 0.33333, 1);
    box-shadow: 0 5px 5px rgba(0,0,0,1);
  }

  &:hover {
    cursor: pointer;

    img {
      opacity: 0.75;
      transform: scale(1.2);
    }

    h4 {
      transform: translateY(0%);
      opacity: 0.85;
      visibility: visible;
    }
  }
`

export const Text = styled.h4`
  bottom: 0px;
  color: white;
  font-size: 1.3rem;
  left: 0;
  opacity: 0;
  transform: translateY(100%);
  position: absolute;
  text-align: center;
  transition-duration: 0.4s;
  transition-property: transform opacity visibility;
  transition-timing-function: cubic-bezier(0.15, 1, 0.33, 1);
  visibility: hidden;
  font-family: Verdana;
  background-color: #242424;
  height: 100px;
  padding-top: 25px;
  /*text-shadow: 3px 3px 1px rgba(0, 0, 0, 1);*/
  opacity: 0;
  width: 100%;
`
