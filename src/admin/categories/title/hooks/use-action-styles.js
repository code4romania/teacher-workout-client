import { makeStyles } from '@material-ui/core'

export const useActionStyles = makeStyles(theme => ({
  box: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
      paddingTop: theme.spacing(3),
    },
  }
}))
