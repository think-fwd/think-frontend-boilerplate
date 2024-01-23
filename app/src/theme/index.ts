import { createTheme } from '@mui/material'
import { TextField } from './TextField/TextField'
import { Button } from './Button/Button'
import { Menu } from './Menu/Menu'
import { Select } from './Select'

declare module '@mui/material/TextField' {
  interface TextFieldPropsSizeOverrides {
    tiny: true
  }
}

export const theme = createTheme({
  typography: {
    h1: {
      fontWeight: 'bold',
      letterSpacing: 0,
      fontSize: '40px',
    },
    h2: {
      fontWeight: 600,
      letterSpacing: -1,
      fontSize: '32px',
    },
    h3: {
      fontWeight: 600,
      letterSpacing: 0,
      fontSize: '24px',
    },
    h4: {
      fontWeight: 600,
      letterSpacing: 0,
      fontSize: '18px',
    },
  },
  palette: {
    primary: {
      contrastText: '#ffffff',
      light: '#FEF5F8',
      dark: '#330012',
      main: '#E63372',
    },
    secondary: {
      contrastText: '#ffffff',
      light: '#F2F2F5',
      dark: '#01012E',
      main: '#00000E',
    },
    muted: {
      main: '#6D7994',
      hint: '#B6BCC9',
      dark: '#121722',
      light: '#F8F8FA',
    },
    gray: {
      dark: '#2F2D2E',
      main: '#E9E4E6',
      light: '#FEFEFE',
    },
  },
})

export const DefaultTheme = createTheme(theme, {
  components: {
    ...TextField,
    ...Button,
    ...Menu,
    ...Select,
  },
})
