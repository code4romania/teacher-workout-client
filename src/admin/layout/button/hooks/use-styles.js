import * as Styles from '@mui/styles'

export const useStyles = Styles.makeStyles(theme => ({
  button: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: '700',
    textTransform: 'none',
    color: 'black',
    '&:active': { background: theme.palette.background.main },
  },
}))
