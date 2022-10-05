import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from '@/presentation/Router'
import { GlobalStyle } from '@/presentation/theme/GlobalStyle'
import { DarkTheme } from '@/presentation/theme/dark.theme'

ReactDOM.render(
  <ThemeProvider theme={DarkTheme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>,
  document.getElementById('main')
)
