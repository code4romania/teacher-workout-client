import {
  Card,
  CardContent,
  CardActions,
  Grid,
  makeStyles,
} from "@material-ui/core";
import { Share } from "@material-ui/icons";
import PropTypes, { string } from "prop-types";
import { AdminDashboardCardBody } from "admin/admin-dashboard-card/body";
import { AdminDashboardCardIcon } from "admin/admin-dashboard-card/icon";
import { AdminDashboardLink } from "admin/admin-dashboard-card/link";

const useStyles = makeStyles({
  cardActions: {
    backgroundColor: "#F9FAFB",
  },
});

export const AdminDashboardCard = ({
  icon,
  title,
  statistics,
  link,
  linkText,
}) => (
  <Card>
    <CardContent>
      <Grid container direction="row" spacing={1}>
        <AdminDashboardCardIcon icon={icon} />
        <AdminDashboardCardBody title={title} statistics={statistics} />
      </Grid>
    </CardContent>
    <CardActions className={useStyles().cardActions}>
      <AdminDashboardLink link={link} text={linkText} />
    </CardActions>
  </Card>
);

AdminDashboardCard.PropTypes = {
  icon: string.isRequired,
  title: string.isRequired,
  statistics: string.isRequired,
  link: string.isRequired,
  linkText: string.isRequired,
};
