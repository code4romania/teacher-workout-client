import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button as MaterialButton } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

const useStyles = makeStyles(theme => ({
  root: {
    width: '40%',
    [theme.breakpoints.down('md')]: { width: '100%' },
  },
  button: { textTransform: 'none' },
}))

export const Button = () => <Box pt={4} className={useStyles().root}>
  <MaterialButton variant={'contained'} color={'primary'} fullWidth className={useStyles().button}>
    Vezi toate cursurile
    <ArrowRightAltIcon />
  </MaterialButton>
</Box>

