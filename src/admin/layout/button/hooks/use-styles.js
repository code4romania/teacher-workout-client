import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => ({
  button: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: '700',
    textTransform: 'none',
    color: 'black',
    '&:active': { background: theme.palette.background.main },
  },
}))
