import { makeStyles } from '@material-ui/core'

export const useActionStyles = makeStyles(theme => ({
  box: {
    [theme.breakpoints.only('xs')]: {
      justifyContent: 'center',
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  },
  button: { [theme.breakpoints.only('xs')]: { width: '100%' } },
}))
