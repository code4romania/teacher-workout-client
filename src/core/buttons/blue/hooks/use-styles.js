import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  button: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: 1.5,
    color: '#FFFFFF',
    marginTop: theme.spacing(3),
    textTransform: 'none',
  },
}))
