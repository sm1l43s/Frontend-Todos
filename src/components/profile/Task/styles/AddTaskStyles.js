import { makeStyles } from "@material-ui/core";

const AddTaskStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    minHeight: 200,
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 360,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    float: "right",
  },
}));

export default AddTaskStyles;
