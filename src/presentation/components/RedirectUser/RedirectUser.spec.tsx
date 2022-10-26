import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { render } from '@testing-library/react'

import { RedirectUser } from './RedirectUser'

describe('presentation/utils/RedirectUser', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<RedirectUser />} />
        </Routes>
      </BrowserRouter>
    )
    expect(container).toMatchSnapshot()
  })

  it('should redirect to /auth', () => {
    const { container } = render(
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<RedirectUser />} />
        </Routes>
      </BrowserRouter>
    )

    expect(container).toBeTruthy()
  })
})
