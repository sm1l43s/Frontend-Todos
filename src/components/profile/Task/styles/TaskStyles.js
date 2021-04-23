import { makeStyles } from "@material-ui/core/styles";

const TaskStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(0),
    marginLeft: theme.spacing(-8),
  },
  center: {
    alignItems: "center",
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
}));

export default TaskStyles;
