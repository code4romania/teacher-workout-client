import React from 'react'
import { Button as MUIButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

const useStyles = makeStyles(theme => ({ root: { textTransform: 'none', width: '40%', marginTop: 32 } }))

export const Button = () => {
  const classes = useStyles()

  return (
    <MUIButton variant={'contained'} color={'primary'} className={classes.root}>
      Vezi toate cursurile
      <ArrowRightAltIcon />
    </MUIButton>
  )
}
