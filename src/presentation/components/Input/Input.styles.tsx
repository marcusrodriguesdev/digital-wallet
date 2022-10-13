import styled from 'styled-components'

import { scaleTypes } from '../types/Input'

export const Container = styled.div`
  position: relative;
`

interface LabelProps {
  isFocused: boolean
  error: boolean
  scale: scaleTypes
}

export const Label = styled.a<LabelProps>`
  ${({ isFocused, theme, scale }) => {
    if (isFocused && scale === 'small') {
      return theme?.fonts?.overline ?? {}
    } else if (!isFocused && scale === 'small') {
      return theme?.fonts?.smallInfo ?? {}
    } else if (isFocused && scale === 'medium') {
      return theme?.fonts?.overline ?? {}
    } else if (!isFocused && scale === 'medium') {
      return theme?.fonts?.info ?? {}
    } else if (isFocused && scale === 'large') {
      return theme?.fonts?.smallInfo ?? {}
    } else if (!isFocused && scale === 'large') {
      return theme?.fonts?.bigInfo ?? {}
    }
  }}
  background: ${({ isFocused, theme }) => (isFocused ? theme?.colors?.background : 'transparent')};
  border-radius: 2xl;
  color: ${({ theme, error, isFocused }) =>
    error
      ? theme?.colors?.error ?? '#ff6666'
      : isFocused
      ? theme?.colors?.highlight ?? '#7f5af0'
      : theme?.colors?.main ?? '#fffffe'};
  cursor: text;
  left: ${({ isFocused, scale }) => {
    if (isFocused && scale === 'small') {
      return '4px'
    } else if (isFocused && scale === 'medium') {
      return '6px'
    } else if (isFocused && scale === 'large') {
      return '8px'
    } else if ((!isFocused && scale === 'small') || scale === 'medium' || scale === 'large') {
      return '12px'
    }
  }};
  padding: 0.5px 5px;
  position: absolute;
  top: ${({ isFocused, scale }) => (isFocused ? -9 : scale === 'small' ? 11 : scale === 'medium' ? 12 : 13)}px;
  transition: 0.2s ease all;
  z-index: 1000;
`

interface StyledInputProps extends LabelProps {
  secureText?: boolean
}

export const StyledInput = styled.input<StyledInputProps>`
  ${({ theme, scale: sized }) =>
    sized === 'small'
      ? theme?.fonts?.smallInfo ?? {}
      : sized === 'medium'
      ? theme?.fonts?.infoNarrow ?? {}
      : theme?.fonts?.bigInfo ?? {}};
  background-color: ${({ theme }) => theme?.colors?.background ?? '#16161a'};
  border: ${({ theme, error, isFocused }) =>
      error ? theme?.colors?.error ?? '#ff6666' : theme?.colors?.highlight ?? '#7f5af0'}
    1px solid;
  border-radius: 2px;
  color: ${({ theme }) => theme?.colors?.main ?? '#fffffe'};
  height: ${({ scale: sized }) => (sized === 'small' ? 40 : sized === 'medium' ? 45 : 50)}px;
  padding-left: 15px;
  padding-bottom: 2px;
  width: ${({ scale: sized }) => (sized === 'small' ? 240 : sized === 'medium' ? 270 : 300)}px;

  &:focus {
    outline: none;
  }
`

interface ButtonProps {
  scale: scaleTypes
}

export const Button = styled.button<ButtonProps>`
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  right: 35px;
  top: 9px;
  z-index: 1000;

  img {
    background: transparent;
  }

  &:hover {
    opacity: 0.8;
  }
`

export const HelpMessageContainer = styled.div``

interface HelpMessageProps {
  error?: boolean
}

export const HelpMessage = styled.p<HelpMessageProps>`
  ${({ theme }) => theme?.fonts?.caption ?? {}};
  color: ${({ theme, error }) => (error ? theme?.colors?.error ?? '#ff6666' : theme?.colors?.main ?? '#fffffe')};
  position: absolute;
`
