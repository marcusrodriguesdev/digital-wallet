import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const RedirectUser: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/user')
    }
  }, [location, navigate])

  return null
}

export { RedirectUser }
