import React from 'react'
import { Input, InputProps } from './Input'
import { fireEvent, render } from '@testing-library/react'
import 'jest-styled-components'
import * as Faker from 'faker'

const makeSUT = (props?: Partial<InputProps>): any => {
  const value = props?.value ?? Faker.random.words(2)
  const name = props?.value ?? Faker.random.word()
  const label = props?.label ?? Faker.random.words(2)
  const type = props?.type ?? 'text'
  const error = props?.error ?? Faker.random.boolean()
  const secureText = props?.secureText ?? Faker.random.boolean()
  const scale = props?.scale ?? 'medium'
  const onChangeSpy = jest.fn()
  const onChangeTypeSpy = jest.fn()

  const sut = (
    <Input
      value={value}
      label={label}
      name={name}
      type={type}
      secureText={secureText}
      scale={scale}
      error={error}
      onChange={onChangeSpy}
      onChangeType={onChangeTypeSpy}
    />
  )

  return { sut, value, label, secureText, name, type, scale, error, onChangeSpy, onChangeTypeSpy }
}

describe('presentation/components/Input', () => {
  it('should match snapshot', () => {
    const { sut } = makeSUT({
      value: 'email@email.com',
      name: 'email',
      label: 'Email',
      type: 'text',
      secureText: false,
      error: false,
      scale: 'medium'
    })
    const inputRender = render(sut)
    expect(inputRender).toMatchSnapshot()
  })

  it('should call onChangeSpy with the typed text as argument when text change', () => {
    const { sut, onChangeSpy } = makeSUT()

    const { getByTestId } = render(sut)
    const input = getByTestId('Input/StyledInput')

    const changedText = Faker.random.word
    fireEvent.change(input, { target: { value: changedText } })

    expect(onChangeSpy).toBeCalledTimes(1)
  })
  it('should contain correct value', () => {
    const { sut, value } = makeSUT()
    const { getByTestId } = render(sut)
    const input = getByTestId('Input/StyledInput') as HTMLInputElement

    expect(input.value).toEqual(value)
  })

  it('should call onChangeTypeSpy when click on eye open button', () => {
    const { sut, onChangeTypeSpy } = makeSUT({
      secureText: true,
      type: 'text'
    })

    const { getByTestId } = render(sut)
    const button = getByTestId('Input/ButtonEyeOpen') as HTMLButtonElement

    fireEvent.click(button)

    expect(onChangeTypeSpy).toBeCalledTimes(1)
  })

  it('should call onChangeTypeSpy when click on eye close button', () => {
    const { sut, onChangeTypeSpy } = makeSUT({
      type: 'password',
      secureText: true
    })

    const { getByTestId } = render(sut)
    const button = getByTestId('Input/ButtonEyeClose') as HTMLButtonElement

    fireEvent.click(button)

    expect(onChangeTypeSpy).toBeCalledTimes(1)
  })

  it('should not contain eye open button when secureText is false', () => {
    const { sut } = makeSUT({
      secureText: false
    })

    const { queryByTestId } = render(sut)
    const button = queryByTestId('Input/ButtonEyeOpen')

    expect(button).toBeNull()
  })

  it('should contain correct label', () => {
    const { sut, label } = makeSUT()

    const { getByTestId } = render(sut)
    const labelElement = getByTestId('Input/Label')

    expect(labelElement.textContent).toEqual(label)
  })

  it('should contain correct name', () => {
    const { sut, name } = makeSUT()

    const { getByTestId } = render(sut)
    const input = getByTestId('Input/StyledInput') as HTMLInputElement

    expect(input.name).toEqual(name)
  })

  it('should contain correct type', () => {
    const { sut, type } = makeSUT()

    const { getByTestId } = render(sut)
    const input = getByTestId('Input/StyledInput') as HTMLInputElement

    expect(input.type).toEqual(type)
  })

  it('should contain error when error is true', () => {
    const { sut } = makeSUT({
      error: true
    })

    const { getByTestId } = render(sut)
    const error = getByTestId('Input/Error')

    expect(error).toBeTruthy()
  })

  it('should not contain error when error is false', () => {
    const { sut } = makeSUT({
      error: false
    })

    const { queryByTestId } = render(sut)
    const error = queryByTestId('Input/Error') as HTMLInputElement

    expect(error).toBeNull()
  })

  it('should has focus when label is clicked', () => {
    const { sut } = makeSUT()

    const { getByTestId } = render(sut)
    const label = getByTestId('Input/Label')

    fireEvent.click(label)
    const input = getByTestId('Input/StyledInput') as HTMLInputElement

    expect(document.activeElement).toBe(input)
  })

  it('should be in blur when value is empty', () => {
    const { sut } = makeSUT({
      value: ''
    })

    const { getByTestId } = render(sut)
    const label = getByTestId('Input/StyledInput')

    fireEvent.blur(label)

    expect(document.activeElement).toBe(document.body)
  })
})
