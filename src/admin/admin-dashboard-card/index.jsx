import React from 'react'
import {
  Card,
  CardContent,
  CardActions,
  Grid,
  makeStyles
} from '@material-ui/core'
import PropTypes from 'prop-types'
import { AdminDashboardCardBody } from 'admin/admin-dashboard-card/body'
import { AdminDashboardCardIcon } from 'admin/admin-dashboard-card/icon'
import { AdminDashboardLink } from 'admin/admin-dashboard-card/link'

const useStyles = makeStyles({ cardActions: { backgroundColor: '#F9FAFB' } })

export const AdminDashboardCard = ({ icon, title, statistics, link, linkText }) => (
  <Card>
    <CardContent>
      <Grid container direction={'row'} spacing={1}>
        <AdminDashboardCardIcon icon={icon} />
        <AdminDashboardCardBody title={title} statistics={statistics} />
      </Grid>
    </CardContent>
    <CardActions className={useStyles().cardActions}>
      <AdminDashboardLink link={link} text={linkText} />
    </CardActions>
  </Card>
)

AdminDashboardCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  statistics: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
}
