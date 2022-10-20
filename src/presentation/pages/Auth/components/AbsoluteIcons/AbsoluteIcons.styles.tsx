import styled from 'styled-components'

export const ContainerColumn = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  user-select: none;
  z-index: 100000;

  img {
    pointer-events: none;
  }
`

export const ContainerCircle = styled.div`
  left: 0;
  position: absolute;
  top: 40px;
  user-select: none;
  z-index: 100000;

  img {
    pointer-events: none;
  }
`

export const ContainerArrow = styled.div`
  bottom: 0;
  position: absolute;
  right: 0;
  user-select: none;
  z-index: 100000;

  img {
    pointer-events: none;
  }
`
