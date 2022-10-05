import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RedirectUser } from './utils/RedirectUser'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RedirectUser />} />
        <Route path="/user" element={<h1>User</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router }
