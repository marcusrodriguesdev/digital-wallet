import React from 'react'

import { fireEvent, render } from '@testing-library/react'
import * as Faker from 'faker'

import { Button, ButtonProps } from './Button'
import '@testing-library/jest-dom/extend-expect'

const makeSUT = (props?: Partial<ButtonProps>): any => {
  const label = props?.label || Faker.random.words(2)
  const variant = props?.variant || 'default'
  const scale = props?.scale || 'medium'
  const disabled = props?.disabled || false
  const onClickSpy = jest.fn()

  const sut = <Button label={label} variant={variant} scale={scale} disabled={disabled} onClick={onClickSpy} />

  return { sut, label, variant, scale, disabled, onClickSpy }
}

describe('presentation/components/Button', () => {
  it('should match snapshot', () => {
    const { sut } = makeSUT({
      label: 'Entrar',
      variant: 'default',
      scale: 'medium'
    })
    expect(sut).toMatchSnapshot()
  })

  it('should call onClickSpy when button is clicked', () => {
    const { sut, onClickSpy } = makeSUT()

    const { getByTestId } = render(sut)
    const button = getByTestId('Button/Button')

    fireEvent.click(button)

    expect(onClickSpy).toBeCalledTimes(1)
  })

  it('should not call onClickSpy when button is clicked and disabled is true', () => {
    const { sut, onClickSpy } = makeSUT({ disabled: true })

    const { getByTestId } = render(sut)
    const button = getByTestId('Button/Button')

    fireEvent.click(button)

    expect(onClickSpy).toBeCalledTimes(0)
  })

  it('should render with correct label', () => {
    const { sut, label } = makeSUT()

    const { getByTestId } = render(sut)
    const button = getByTestId('Button/Button')

    expect(button.textContent).toBe(label)
  })

  it('should render with correct scale', () => {
    const { sut, scale } = makeSUT({
      scale: 'small'
    })

    const { getByTestId } = render(sut)
    const button = getByTestId('Button/Button')

    expect(button).toHaveAttribute('scale', scale)
  })
})
