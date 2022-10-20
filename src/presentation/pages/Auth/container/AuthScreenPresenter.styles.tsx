import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
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
