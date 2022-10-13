import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AuthScreenPresenter } from './screens/Auth/container'
import { RedirectUser } from './utils/RedirectUser'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RedirectUser />} />
        <Route path="/auth" element={<AuthScreenPresenter />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router }
