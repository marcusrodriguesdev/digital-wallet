import React from 'react'

import { Assets } from '@/presentation/theme/Assets'
import { getInitials } from '@/presentation/utils/string'

import { CircleName, Container, ContainerInfo, OpenInput, Label, MenuButton } from './Header.styles'

export interface HeaderProps {
  renderInfo: boolean
  email: string
  expenseTotal: number
  incomeTotal: number
  onExpenseClick: () => void
  onIncomeClick: () => void
  onOpenDrawer: () => void
}

/**
 * A Header for the application
 *
 * @param renderInfo      The boolean to render the info
 * @param email           The email of the user
 * @param expenseTotal    The total of expenses
 * @param incomeTotal     The total of incomes
 * @param onExpenseClick  A function to be called when the expense button is clicked
 * @param onIncomeClick   A function to be called when the income button is clicked
 * @param onOpenDrawer    A function to be called when the menu button is clicked
 */

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { email, renderInfo, expenseTotal, incomeTotal, onExpenseClick, onIncomeClick, onOpenDrawer } = props

  return (
    <Container>
      <MenuButton onClick={onOpenDrawer} data-testid="Header/MenuButton">
        <img src={Assets.HamburguerMenu} alt="menu" />
      </MenuButton>
      <ContainerInfo>
        {renderInfo && (
          <>
            <OpenInput expense onClick={onExpenseClick} data-testid="Header/ExpenseButton">
              <Label>Total de despesas: </Label>
              <span>R${expenseTotal}</span>
            </OpenInput>
            <OpenInput expense={false} onClick={onIncomeClick} data-testid="Header/IncomeButton">
              <Label>Total de ganhos: </Label>
              <span>R${incomeTotal}</span>
            </OpenInput>
          </>
        )}
        <CircleName data-testid="Header/CircleName">
          <span>{getInitials(email)}</span>
        </CircleName>
      </ContainerInfo>
    </Container>
  )
}

export { Header }
