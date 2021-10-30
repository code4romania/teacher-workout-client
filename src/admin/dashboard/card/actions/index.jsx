import React from 'react'
import * as Styles from '@mui/styles'
import * as Material from '@mui/material'
import { Link } from 'admin/dashboard/card/actions/link'
import { useContext } from 'admin/dashboard/card/context'

const useStyles = Styles.makeStyles({ cardActions: { backgroundColor: '#F9FAFB' } })

export const Actions = () => <Material.CardActions className={useStyles().cardActions}>
  <Link link={useContext().link} text={useContext().linkText} />
</Material.CardActions>
