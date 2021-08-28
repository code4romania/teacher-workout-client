import React from 'react'
import * as Material from '@material-ui/core'
import PropTypes from 'prop-types'
import { Body } from 'admin/dashboard/body'
import { Icon } from 'admin/dashboard/card/icon'
import { Link } from 'admin/dashboard/link'

const useStyles = makeStyles({ cardActions: { backgroundColor: '#F9FAFB' } })

export const Card = ({ icon, title, statistics, link, linkText }) => (
  <Material.Card>
    <Material.CardContent>
      <Material.Grid container direction={'row'} spacing={1}>
        <Icon icon={icon} />
        <Body title={title} statistics={statistics} />
      </Material.Grid>
    </Material.CardContent>
    <Material.CardActions className={useStyles().cardActions}>
      <Link link={link} text={linkText} />
    </Material.CardActions>
  </Material.Card>
)

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  statistics: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
}
