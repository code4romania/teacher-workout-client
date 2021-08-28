import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(10),
    [theme.breakpoints.only('xs')]: { padding: theme.spacing(0) },
  },
}))
