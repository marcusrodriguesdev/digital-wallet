import React from 'react'

import { render } from '@testing-library/react'

import { Drawer, DrawerProps } from './Drawer'

const makeSut = (props?: Partial<DrawerProps>): any => {
  const dashboardSelected = props?.dashboardSelected ?? true
  const settingSelected = props?.settingSelected ?? false
  const walletSelected = props?.walletSelected ?? false
  const logoutSelected = props?.logoutSelected ?? false
  const onCloseMenu = props?.onCloseMenu ?? jest.fn()
  const onSelectWallet = props?.onSelectWallet ?? jest.fn()
  const onSelectSetting = props?.onSelectSetting ?? jest.fn()
  const onLogoutSelected = props?.onLogoutSelected ?? jest.fn()
  const onSelectDashboard = props?.onSelectDashboard ?? jest.fn()

  const sut = (
    <Drawer
      dashboardSelected={dashboardSelected}
      settingSelected={settingSelected}
      walletSelected={walletSelected}
      logoutSelected={logoutSelected}
      onCloseMenu={onCloseMenu}
      onSelectWallet={onSelectWallet}
      onSelectSetting={onSelectSetting}
      onLogoutSelected={onLogoutSelected}
      onSelectDashboard={onSelectDashboard}
    />
  )

  return {
    sut,
    dashboardSelected,
    settingSelected,
    walletSelected,
    logoutSelected,
    onCloseMenu,
    onSelectWallet,
    onSelectSetting,
    onLogoutSelected,
    onSelectDashboard
  }
}

describe('presentation/components/Drawer', () => {
  it('should match snapshot', () => {
    const { sut } = makeSut()
    const component = render(sut)
    expect(component).toMatchSnapshot()
  })

  it('should render other icons accordingly', () => {
    const { sut } = makeSut({
      dashboardSelected: false,
      settingSelected: true,
      walletSelected: true,
      logoutSelected: true
    })
    const component = render(sut)
    expect(component).toMatchSnapshot()
  })

  it('should call onSelectDashboard when dashboard button is clicked', () => {
    const { sut, onSelectDashboard } = makeSut()

    const { getByTestId } = render(sut)
    const button = getByTestId('Drawer/DashboardButton')

    button.click()

    expect(onSelectDashboard).toBeCalledTimes(1)
  })

  it('should call onSelectWallet when wallet button is clicked', () => {
    const { sut, onSelectWallet } = makeSut()

    const { getByTestId } = render(sut)
    const button = getByTestId('Drawer/WalletButton')

    button.click()

    expect(onSelectWallet).toBeCalledTimes(1)
  })

  it('should call onSelectSetting when setting button is clicked', () => {
    const { sut, onSelectSetting } = makeSut()

    const { getByTestId } = render(sut)
    const button = getByTestId('Drawer/SettingsButton')

    button.click()

    expect(onSelectSetting).toBeCalledTimes(1)
  })

  it('should call onLogoutSelected when logout button is clicked', () => {
    const { sut, onLogoutSelected } = makeSut()

    const { getByTestId } = render(sut)
    const button = getByTestId('Drawer/LogoutButton')

    button.click()

    expect(onLogoutSelected).toBeCalledTimes(1)
  })

  it('should call onCloseMenu when close button is clicked', () => {
    const { sut, onCloseMenu } = makeSut()

    const { getByTestId } = render(sut)
    const button = getByTestId('Drawer/CloseButton')

    button.click()

    expect(onCloseMenu).toBeCalledTimes(1)
  })
})
