import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme?.colors?.background ?? '#242629'};
  border-right: 1px solid ${({ theme }) => theme?.colors?.cardBackground ?? '#16161a'};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 40px 0 40px 32px;
  width: 270px;
`

export const Wrapper = styled.div``

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h1`
  ${({ theme }) => theme?.fonts?.title ?? {}}
  color: ${({ theme }) => theme?.colors?.highlight ?? '#7F5AF0'};
`

export const CloseButton = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme?.colors?.background ?? '#242629'};
  border-bottom: 0.5px solid ${({ theme }) => theme?.colors?.cardBackground ?? '#16161a'};
  border-bottom-left-radius: 8px;
  border-left: 0.5px solid ${({ theme }) => theme?.colors?.cardBackground ?? '#16161a'};
  border-top: 0.5px solid ${({ theme }) => theme?.colors?.cardBackground ?? '#16161a'};
  border-top-left-radius: 8px;
  border-right: none;
  cursor: pointer;
  display: flex;
  height: 28px;
  justify-content: center;
  outline: none;
  width: 34px;
`

export const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Text = styled.p`
  ${({ theme }) => theme?.fonts?.infoSelected ?? {}}
  color: ${({ theme }) => theme?.colors?.subHeadline ?? '#94a1b2'};
  margin-bottom: 16px;
  margin-top: 50px;
`

interface ButtonProps {
  selected: boolean
}
export const Button = styled.button<ButtonProps>`
  ${({ theme }) => theme?.fonts?.info ?? {}}
  align-items: center;
  color: ${({ theme, selected }) =>
    selected ? theme?.colors?.background ?? '#242629' : theme?.colors?.subHeadline ?? '#94a1b2'};
  cursor: pointer;
  background-color: ${({ theme, selected }) =>
    selected ? theme?.colors?.highlight ?? '#7f5af0' : theme?.colors?.background ?? '#242629'};
  border: none;
  border-radius: 8px;
  display: flex;
  height: 56px;
  margin-bottom: 4px;
  margin-left: -16px;
  padding-left: 16px;
  width: 237px;

  img {
    background-color: transparent;
    margin-right: 16px;
  }
`
