import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  text: {
    textAlign: 'right',
    [theme.breakpoints.down('md')]: { textAlign: 'center' },
  },
}))

export const Title = () => <Typography className={useStyles().text} variant={'h6'} color={'textSecondary'}>
  <strong>
    Descarcă aplicația
  </strong>
</Typography>

