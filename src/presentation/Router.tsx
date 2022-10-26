import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { RedirectUser } from './components/RedirectUser'
import { AuthScreenPresenter } from './pages/Auth/container'

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
