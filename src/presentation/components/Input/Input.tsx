import React, { useRef, useState } from 'react'
import { Assets } from '../../../presentation/theme/Assets'
import { scaleTypes } from '../types/Input'
import { Button, Container, HelpMessage, HelpMessageContainer, Label, StyledInput } from './Input.styles'

export interface InputProps {
  label: string
  value: string
  name: string
  type: string
  error?: boolean
  scale: scaleTypes
  secureText?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeType?: () => void
}

/**
 * Input component
 *
 * @param label           The label of the input
 * @param value           The value of the input
 * @param name            The name of the input
 * @param type            The type of the input
 * @param error           The error of the input
 * @param scale           The scale of the input
 * @param secureText      The boolean to show or hide the password
 * @param onChange        The function to be called when the input changes
 * @param onChangeType    The function to be called when the input type changes
 */

const Input: React.FC<InputProps> = (props: InputProps) => {
  const { label, value, name, type, secureText, error, scale, onChange, onChangeType } = props

  const [isFocused, setIsFocused] = useState(!!value)
  const [textFocused, setTextFocused] = useState(false)
  const inputRef = useRef({} as HTMLInputElement)

  const toggleFocus = (): void => {
    if (!value) {
      setIsFocused(!isFocused)
    }
    setTextFocused(!textFocused)
  }

  return (
    <Container>
      {label && (
        <Label
          scale={scale}
          isFocused={isFocused}
          error={error}
          data-testid="Input/Label"
          onClick={() => inputRef.current.focus()}>
          {label}
        </Label>
      )}
      <StyledInput
        secureText={secureText}
        isFocused={isFocused}
        name={name}
        onFocus={() => toggleFocus()}
        onBlur={() => toggleFocus()}
        ref={inputRef}
        value={value}
        type={type}
        error={error}
        onChange={onChange}
        data-testid="Input/StyledInput"
        scale={scale}
      />

      {secureText && type === 'text' && (
        <Button scale={scale} data-testid="Input/ButtonEyeOpen" type="button" onClick={onChangeType}>
          <img src={Assets.EyeOpen} alt="Eye open" />
        </Button>
      )}
      {secureText && type === 'password' && (
        <Button scale={scale} data-testid="Input/ButtonEyeClose" type="button" onClick={onChangeType}>
          <img className="eye-close" src={Assets.EyeClose} alt="Eye close" />
        </Button>
      )}
      {error && (
        <HelpMessageContainer data-testid="Input/Error">
          {secureText && <HelpMessage error={error}>Email ou senha incorreto</HelpMessage>}
        </HelpMessageContainer>
      )}
    </Container>
  )
}

export { Input }
