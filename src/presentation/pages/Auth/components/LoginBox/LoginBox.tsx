import React from 'react'

import { Button } from '@/presentation/components/Button'
import { Input } from '@/presentation/components/Input'

import { ButtonWrapper, Container, InputWrapper, Title } from './LoginBox.styles'

export interface LoginBoxProps {
  emailValue: string
  disabled: boolean
  onSubmit: () => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const LoginBox: React.FC<LoginBoxProps> = (props: LoginBoxProps) => {
  const { emailValue, disabled, onSubmit, onChange } = props

  return (
    <Container>
      <Title>Welcome</Title>
      <InputWrapper>
        <Input label="E-mail" name="email" value={emailValue} type="text" scale="large" onChange={onChange} />
      </InputWrapper>
      <ButtonWrapper>
        <Button label="Next" scale="large" variant="default" disabled={disabled} onClick={onSubmit} />
      </ButtonWrapper>
    </Container>
  )
}

export { LoginBox }
