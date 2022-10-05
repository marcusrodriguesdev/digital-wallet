import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}

interface AppThemeFont {
  fontFamily: string
  fontSize: string
  letterSpacing: string
  fontWeight: number
}

export interface AppTheme {
  colors: {
    error: string
    background: string
    cardBackground: string
    subHeadline: string
    stroke: string
    main: string
    highlight: string
    secondary: string
    tertiary: string
  }
  fonts: {
    h1: AppThemeFont
    h2: AppThemeFont
    h3: AppThemeFont
    h4: AppThemeFont
    h5: AppThemeFont
    bigTitle: AppThemeFont
    title: AppThemeFont
    smallTitle: AppThemeFont
    bigInfo: AppThemeFont
    info: AppThemeFont
    smallInfo: AppThemeFont
    infoSelected: AppThemeFont
    infoNarrow: AppThemeFont
    text: AppThemeFont
    smallText: AppThemeFont
    caption: AppThemeFont
    bigOverline: AppThemeFont
    overline: AppThemeFont
    label: AppThemeFont
    smallLabel: AppThemeFont
  }
}
