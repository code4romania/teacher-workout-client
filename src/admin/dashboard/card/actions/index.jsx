import React from 'react'
import * as Material from '@material-ui/core'
import { Link } from 'admin/dashboard/card/actions/link'
import { useContext } from 'admin/dashboard/card/context'

const useStyles = Material.makeStyles({ cardActions: { backgroundColor: '#F9FAFB' } })

export const Actions = () => <Material.CardActions className={useStyles().cardActions}>
  <Link link={useContext().link} text={useContext().linkText} />
</Material.CardActions>
