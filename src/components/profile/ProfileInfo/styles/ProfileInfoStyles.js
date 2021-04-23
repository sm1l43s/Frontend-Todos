import { makeStyles } from "@material-ui/core";
import green from "@material-ui/core/colors/green";

const ProfileInfoStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0),
    marginLeft: theme.spacing(0),
  },
  card: {
    display: "flex",
    minHeight: 140,
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 360,
    maxHeight: 220,
  },
  smallIcon: {
    fontSize: 20,
  },
  green: {
    color: green[500],
  },
  spacing: {
    marginTop: theme.spacing(1),
  },
}));

export default ProfileInfoStyles;
