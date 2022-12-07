import styled from 'styled-components'

export const Container = styled.header`
  align-items: center;
  border-bottom: ${({ theme }) => theme?.colors?.cardBackground} 1px solid;
  display: flex;
  justify-content: space-between;
  padding: 20px 48px;
`

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

export const ContainerInfo = styled.div`
  display: flex;
`

export const Label = styled.p`
  ${({ theme }) => theme?.fonts?.bigInfo ?? {}}
  color: ${({ theme }) => theme?.colors?.subHeadline ?? '#94a1b2'};
  display: inline;
`

interface OpenInputProps {
  value: 'expense' | 'income' | 'month'
}

export const OpenInput = styled.button<OpenInputProps>`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 36px;

  span {
    ${({ theme }) => theme?.fonts?.bigInfo ?? {}}
    color: ${({ theme, value }) =>
      value === 'expense'
        ? theme?.colors?.error ?? '#ff6666'
        : value === 'income'
        ? theme?.colors?.tertiary ?? '#2cb67d'
        : theme?.colors?.highlight ?? '#7f5af0'};
  }
`

export const CircleName = styled.div`
  align-items: center;
  background: ${({ theme }) => theme?.colors?.subHeadline ?? '#94a1b2'};
  border-radius: 30px;
  display: flex;
  height: 44px;
  justify-content: center;
  width: 44px;

  span {
    ${({ theme }) => theme?.fonts?.bigInfo ?? {}}
    background: none;
    color: ${({ theme }) => theme?.colors?.cardBackground ?? '#16161a'};
    cursor: default;
  }
`
