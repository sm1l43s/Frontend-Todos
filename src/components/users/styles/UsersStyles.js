import { makeStyles } from "@material-ui/core/styles";

const UsersStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  filter: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

export default UsersStyles;
