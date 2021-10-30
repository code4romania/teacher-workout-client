import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => ({
  button: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: 1.5,
    color: '#FFFFFF',
    textTransform: 'none',
  },
}))
