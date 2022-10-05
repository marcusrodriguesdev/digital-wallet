import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation/Router'
import { GlobalStyle } from '@/presentation/theme/GlobalStyle'

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Router />
  </React.Fragment>,
  document.getElementById('main')
)
