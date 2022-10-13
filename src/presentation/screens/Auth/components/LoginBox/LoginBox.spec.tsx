import React from 'react'

import { fireEvent, render } from '@testing-library/react'
import * as Faker from 'faker'

import { LoginBox, LoginBoxProps } from './LoginBox'

const makeSUT = (props?: Partial<LoginBoxProps>): any => {
  const emailValue = props?.emailValue ?? Faker.random.words(2)
  const disabled = props?.disabled ?? false
  const onSubmitSpy = jest.fn()
  const onChangeSpy = jest.fn()

  const sut = <LoginBox emailValue={emailValue} disabled={disabled} onSubmit={onSubmitSpy} onChange={onChangeSpy} />

  return { sut, emailValue, onSubmitSpy, onChangeSpy }
}

describe('presentation/screens/Auth/LoginBox', () => {
  it('should match snapshot', () => {
    const { sut } = makeSUT({
      emailValue: 'email@email.com'
    })
    const loginBoxRender = render(sut)
    expect(loginBoxRender).toMatchSnapshot()
  })

  it('should call onSubmit with correct values', () => {
    const { sut, onSubmitSpy } = makeSUT()
    const { getByTestId } = render(sut)
    const button = getByTestId('Button/Button')
    button.click()
    expect(onSubmitSpy).toHaveBeenCalled()
  })

  it('should call onChange with correct values', () => {
    const { sut, onChangeSpy } = makeSUT()
    const { getByTestId } = render(sut)
    const input = getByTestId('Input/StyledInput')
    fireEvent.change(input, { target: { value: 'any_value' } })
    expect(onChangeSpy).toHaveBeenCalled()
  })

  it('should not call onSubmit if disabled is true', () => {
    const { sut, onSubmitSpy } = makeSUT({
      disabled: true
    })
    const { getByTestId } = render(sut)
    const button = getByTestId('Button/Button')
    button.click()
    expect(onSubmitSpy).not.toHaveBeenCalled()
  })
})
