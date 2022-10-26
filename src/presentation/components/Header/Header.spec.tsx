/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react'

import { fireEvent, render } from '@testing-library/react'
import * as Faker from 'faker'

import { Header, HeaderProps } from './Header'

const makeSut = (props?: Partial<HeaderProps>): any => {
  const expenseTotal = props?.expenseTotal ?? Faker.random.number()
  const incomeTotal = props?.incomeTotal ?? Faker.random.number()
  const email = props?.email ?? Faker.internet.email()
  const renderInfo = props?.renderInfo ?? true
  const onExpenseClick = jest.fn()
  const onIncomeClick = jest.fn()
  const onOpenDrawer = jest.fn()

  const sut = (
    <Header
      renderInfo={renderInfo}
      email={email}
      expenseTotal={expenseTotal}
      incomeTotal={incomeTotal}
      onExpenseClick={onExpenseClick}
      onIncomeClick={onIncomeClick}
      onOpenDrawer={onOpenDrawer}
    />
  )

  return {
    sut,
    renderInfo,
    email,
    expenseTotal,
    incomeTotal,
    onExpenseClick,
    onIncomeClick,
    onOpenDrawer
  }
}

describe('presentation/components/Header', () => {
  it('should match snapshot', () => {
    const { sut } = makeSut({
      email: 'alguem@gmail.com',
      expenseTotal: 100,
      incomeTotal: 200
    })
    const component = render(sut)
    expect(component).toMatchSnapshot()
  })

  it('should call onExpenseClick when expense button is clicked', () => {
    const { sut, onExpenseClick } = makeSut()

    const { getByTestId } = render(sut)
    const button = getByTestId('Header/ExpenseButton')

    fireEvent.click(button)

    expect(onExpenseClick).toBeCalledTimes(1)
  })

  it('should call onIncomeClick when income button is clicked', () => {
    const { sut, onIncomeClick } = makeSut()

    const { getByTestId } = render(sut)
    const button = getByTestId('Header/IncomeButton')

    fireEvent.click(button)

    expect(onIncomeClick).toBeCalledTimes(1)
  })

  it('should call onOpenDrawer when menu button is clicked', () => {
    const { sut, onOpenDrawer } = makeSut()

    const { getByTestId } = render(sut)
    const button = getByTestId('Header/MenuButton')

    fireEvent.click(button)

    expect(onOpenDrawer).toBeCalledTimes(1)
  })

  it('should display expense total', () => {
    const { sut, expenseTotal } = makeSut()

    const { getByTestId } = render(sut)
    const button = getByTestId('Header/ExpenseButton')

    expect(button.textContent).toContain(`Total de despesas: R$${expenseTotal}`)
  })

  it('should display income total', () => {
    const { sut, incomeTotal } = makeSut()

    const { getByTestId } = render(sut)
    const button = getByTestId('Header/IncomeButton')

    expect(button.textContent).toContain(`Total de ganhos: R$${incomeTotal}`)
  })

  it('should display initials', () => {
    const { sut } = makeSut({
      email: 'alguem@gmail.com'
    })

    const { getByTestId } = render(sut)
    const button = getByTestId('Header/CircleName')

    expect(button.textContent).toContain('A')
  })
})