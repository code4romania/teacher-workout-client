import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({ box: { [theme.breakpoints.down('sm')]: { paddingRight: 0 } } }))
