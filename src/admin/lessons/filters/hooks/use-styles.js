import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  box: {
    [theme.breakpoints.down('md')]: {
      paddingTop: '20px'
    }
  } 
}));
