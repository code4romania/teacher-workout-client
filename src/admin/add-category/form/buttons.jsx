import { Button } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  buttonList: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '20px 0 0',
  },
  submitButton: { marginLeft: '22px' },
})

export const Buttons = () => {
  const classes = useStyles()

  return (
    <div className={classes.buttonList}>
      <Button variant={'contained'}>
        Anulează
      </Button>
      <Button className={classes.submitButton} variant={'contained'} color={'primary'}>
        Salvează
      </Button>
    </div>
  )
}
