import { makeStyles } from "@material-ui/core/styles";

const AdminPanelStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
  },
  largeIcon: {
    fontSize: "48px",
  },
}));

export default AdminPanelStyles;
