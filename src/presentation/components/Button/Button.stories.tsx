import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import '@react-theming/storybook-addon/register'
import { ThemeProvider } from 'styled-components'
import { DarkTheme } from '@/presentation/theme/dark.theme'
import { Button } from './Button'

storiesOf('presentation/components/Button', module)
  .addDecorator((storyFn) => (
    <div style={{ backgroundColor: '#262626', padding: '20px' }} className="auth__container__content">
      {storyFn()}
    </div>
  ))
  .add('default', () => (
    <ThemeProvider theme={DarkTheme}>
      <Button scale="medium" label="Entrar" variant="default" onClick={action('onClick')} />
    </ThemeProvider>
  ))
