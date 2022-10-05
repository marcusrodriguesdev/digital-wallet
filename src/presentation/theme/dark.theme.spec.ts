import { DarkTheme } from './dark.theme'

describe('Dark Theme definition', () => {
  it('should be defined', () => {
    expect(DarkTheme).toBeTruthy()
  })

  it('should have colors and fonts', () => {
    expect(DarkTheme.colors).toBeTruthy()
    expect(DarkTheme.fonts).toBeTruthy()
  })
})
