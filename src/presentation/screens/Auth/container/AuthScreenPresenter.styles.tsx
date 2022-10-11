import styled from 'styled-components'

// window size 948x1920
export const Container = styled.div`
  width: 100%;
  height: 100%;
`

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

export const ContainerLoginBox = styled.div`
  align-items: center;
  display: flex;
  height: 94vh;
  justify-content: center;
`

export const Credits = styled.h1`
  ${({ theme }) => theme?.fonts?.text ?? {}}
  color: ${({ theme }) => theme?.colors?.subHeadline ?? '#94a1b2'};
  text-align: center;
`

// window size 948x1920
