import { Assets } from '@/presentation/theme/Assets'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginBox } from '../components/LoginBox'
import {
  Container,
  ContainerArrow,
  ContainerCircle,
  ContainerColumn,
  ContainerLoginBox,
  Credits
} from './AuthScreenPresenter.styles'

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

  const renderIconsComponent = (): JSX.Element => (
    <React.Fragment>
      <ContainerColumn>
        <img src={Assets.ColumnGroup} alt="columns group" />
      </ContainerColumn>
      <ContainerCircle>
        <img src={Assets.CircleGroup} alt="circle" />
      </ContainerCircle>
      <ContainerArrow>
        <img src={Assets.ArrowGroup} alt="arrow" />
      </ContainerArrow>
    </React.Fragment>
  )

  useEffect(() => {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g
    const isValid = emailRegex.test(emailValue)

    setValidEmail(isValid && emailValue.length > 0)
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
      {renderIcons && renderIconsComponent()}
      <Credits>Desenvolvido com 💜 por Marcus Rodrigues</Credits>
    </Container>
  )
}

export { AuthScreenPresenter }
