import React from 'react'

import { Assets } from '@/presentation/theme/Assets'

import {
  CloseButton,
  Container,
  OverviewContainer,
  Title,
  TitleContainer,
  Text,
  Button,
  Wrapper
} from './Drawer.styles'

export interface DrawerProps {
  dashboardSelected: boolean
  settingSelected: boolean
  walletSelected: boolean
  logoutSelected: boolean
  onCloseMenu: () => void
  onSelectWallet: () => void
  onSelectSetting: () => void
  onLogoutSelected: () => void
  onSelectDashboard: () => void
}

const Drawer: React.FC<DrawerProps> = (props: DrawerProps) => {
  const {
    dashboardSelected,
    settingSelected,
    walletSelected,
    logoutSelected,
    onCloseMenu,
    onSelectWallet,
    onSelectSetting,
    onLogoutSelected,
    onSelectDashboard
  } = props

  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <Title>Digital Wallet</Title>
          <CloseButton onClick={onCloseMenu} type="button" data-testid="Drawer/CloseButton">
            <img src={Assets.ArrowLeft} alt="voltar" />
          </CloseButton>
        </TitleContainer>
        <OverviewContainer>
          <Text>VISÃO GERAL</Text>
          <Button selected={walletSelected} onClick={onSelectWallet} type="button" data-testid="Drawer/WalletButton">
            <img src={walletSelected ? Assets.WalletSelected : Assets.Wallet} alt="voltar" />
            Carteira
          </Button>
          <Button
            selected={dashboardSelected}
            onClick={onSelectDashboard}
            type="button"
            data-testid="Drawer/DashboardButton">
            <img src={dashboardSelected ? Assets.DashboardSelected : Assets.Dashboard} alt="painel de controle" />
            Painel de Controle
          </Button>
        </OverviewContainer>
      </Wrapper>
      <Wrapper>
        <OverviewContainer>
          <Text>OUTROS</Text>
          <Button
            selected={settingSelected}
            onClick={onSelectSetting}
            type="button"
            data-testid="Drawer/SettingsButton">
            <img src={settingSelected ? Assets.SettingsSelected : Assets.Settings} alt="configurações" />
            Configurações
          </Button>
          <Button selected={logoutSelected} onClick={onLogoutSelected} type="button" data-testid="Drawer/LogoutButton">
            <img src={logoutSelected ? Assets.LogoutSelected : Assets.Logout} alt="sair" />
            Sair
          </Button>
        </OverviewContainer>
      </Wrapper>
    </Container>
  )
}

export { Drawer }
