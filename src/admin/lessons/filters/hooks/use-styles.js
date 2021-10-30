import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => ({ box: { [theme.breakpoints.down('sm')]: { paddingRight: 0 } } }))
