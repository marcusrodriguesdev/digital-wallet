import React from 'react'
import { LoginBox, LoginBoxProps } from './LoginBox'

import * as Faker from 'faker'
import { fireEvent, render } from '@testing-library/react'

const makeSUT = (props?: Partial<LoginBoxProps>): any => {
  const emailValue = props?.emailValue ?? Faker.random.words(2)
  const onSubmitSpy = jest.fn()
  const onChangeSpy = jest.fn()

  const sut = <LoginBox emailValue={emailValue} onSubmit={onSubmitSpy} onChange={onChangeSpy} />

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
})
