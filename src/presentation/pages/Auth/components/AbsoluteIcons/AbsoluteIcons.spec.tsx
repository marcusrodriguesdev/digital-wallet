import React from 'react'

import { render } from '@testing-library/react'

import { AbsoluteIcons } from './AbsoluteIcons'

describe('presentation/screens/Auth/AbsoluteIcons', () => {
  it('should match snapshot', () => {
    const sut = <AbsoluteIcons />
    const absoluteIconsRender = render(sut)
    expect(absoluteIconsRender).toMatchSnapshot()
  })
})
