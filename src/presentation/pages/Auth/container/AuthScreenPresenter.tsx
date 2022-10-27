import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { validateEmail } from '@/presentation/utils/string'

import { AbsoluteIcons } from '../components/AbsoluteIcons'
import { LoginBox } from '../components/LoginBox'
import { Container, ContainerLoginBox, Credits } from './AuthScreenPresenter.styles'

const AuthScreenPresenter: React.FC = () => {
  const [emailValue, setEmailValue] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [renderIcons, setRenderIcons] = useState(true)
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const navigate = useNavigate()

  const handleSubmit = (): void => {
    localStorage.setItem('email', emailValue)
    navigate('/wallet')
  }

  useEffect(() => {
    const emailIsValid = validateEmail(emailValue)

    setValidEmail(emailIsValid && emailValue.length > 0)
  }, [emailValue, setValidEmail])

  useEffect(() => {
    const email = localStorage.getItem('email')

    if (email) navigate('/wallet')
  }, [emailValue])

  useEffect(() => {
    if (windowSize < 1330) {
      setRenderIcons(false)
    } else {
      setRenderIcons(true)
    }
  }, [windowSize, renderIcons, setRenderIcons])

  useEffect(() => {
    const handleWindowResize = (): void => {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)
  }, [])

  return (
    <Container>
      <ContainerLoginBox>
        <LoginBox
          emailValue={emailValue}
          disabled={!validEmail}
          onChange={({ target }) => setEmailValue(target.value)}
          onSubmit={() => handleSubmit()}
        />
      </ContainerLoginBox>
      {renderIcons && <AbsoluteIcons />}
      <Credits>Desenvolvido com 💜 por Marcus Rodrigues</Credits>
    </Container>
  )
}

export { AuthScreenPresenter }
