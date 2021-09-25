import * as Material from '@material-ui/core'

export const useStyles = Material.makeStyles(theme => ({
  button: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: '700',
    textTransform: 'none',
    '&:active': { background: theme.palette.background.main },
  },
}))
