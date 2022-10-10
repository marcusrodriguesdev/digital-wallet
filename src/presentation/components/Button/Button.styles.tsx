import styled from 'styled-components'
import { ButtonVariantTypes, ScaleTypes } from '../types/Button'

interface ContainerProps {
  variant: ButtonVariantTypes
  scale: ScaleTypes
  disabled: boolean
}

export const Container = styled.button<ContainerProps>`
  align-items: center;
  background-color: ${({ theme, variant }) =>
    variant === 'outline' ? 'transparent' : theme?.colors?.highlight ?? '#7f5af0'};
  border: ${({ theme }) => theme?.colors?.highlight ?? '#7f5af0'} solid 2.5px;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  height: ${({ scale: sized }) => (sized === 'small' ? 40 : sized === 'medium' ? 45 : 50)}px;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
  width: ${({ scale: sized }) => (sized === 'small' ? 240 : sized === 'medium' ? 270 : 300)}px;

  &:hover {
    opacity: 0.8;
  }
`

interface TextProps {
  scale: ScaleTypes
}

export const Text = styled.span<TextProps>`
  ${({ theme }) => theme?.fonts?.bigInfo ?? {}}
  background-color: transparent;
  color: ${({ theme }) => theme?.colors?.main ?? '#fffffe'};
`
