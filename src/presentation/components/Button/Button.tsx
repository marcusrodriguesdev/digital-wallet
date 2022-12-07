import React from 'react'

import { ButtonVariantTypes, ScaleTypes } from '../../types/Button'
import { Container, Text } from './Button.styles'

export interface ButtonProps {
  label: string
  variant: ButtonVariantTypes
  scale: ScaleTypes
  disabled?: boolean
  onClick: () => void
}

/**
 * A stylized button for the application
 *
 * @param label     The Buttons's display text
 * @param variant   Control Button shape style
 * @param scale     Control Button size
 * @param disabled  Disable button click and change it's opacity
 * @param onClick   Callback on item press
 */

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { label, variant, disabled, scale, onClick } = props

  const handlePress = (): void => {
    if (!disabled) onClick()
  }

  return (
    <Container
      type="button"
      data-testid="Button/Button"
      variant={variant}
      disabled={disabled}
      onClick={handlePress}
      scale={scale}>
      <Text scale={scale}>{label}</Text>
    </Container>
  )
}

export { Button }
