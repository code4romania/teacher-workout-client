import { createMuiTheme } from '@material-ui/core'

const fontFamily = ['IBM Plex Sans', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(',')
const typography = {
  fontFamily,
  button: { textTransform: 'none' },
}

export const make = () => createMuiTheme({
  palette: {
    background: {
      main: '#F9FAFB',
      light: '#ffffff',
      dark: '#b3b3b3',
    },
    primary: {
      main: '#06B6D4',
      light: '#9cd8e2',
      dark: '#00515e',
    },
  },
  typography,
})
