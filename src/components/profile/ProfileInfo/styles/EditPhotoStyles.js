import { makeStyles } from "@material-ui/core";

const EditPhotoStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  form: {
    width: "300px", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    float: "right",
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    display: "none",
  },
}));

export default EditPhotoStyles;
