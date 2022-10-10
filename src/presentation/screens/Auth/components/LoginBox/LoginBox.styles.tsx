import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  ${({ theme }) => theme?.fonts?.h3 ?? {}}
  color: ${({ theme }) => theme?.colors?.main ?? '#fffffe'};
  margin-bottom: 50px;
`

export const InputWrapper = styled.div`
  margin-bottom: 40px;
`

export const ButtonWrapper = styled.div``
