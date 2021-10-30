import React from 'react'
import { Core } from 'core'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { LinkButton } from 'admin/add-category/form/link-button'

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
      <Grid item>
        <LinkButton to={`/admin/categories`}>Anulează</LinkButton>
      </Grid>
      <Grid item className={classes.submitButton}>
        <Core.Buttons.Blue>Salvează</Core.Buttons.Blue>
      </Grid>
    </div>
  )
}
