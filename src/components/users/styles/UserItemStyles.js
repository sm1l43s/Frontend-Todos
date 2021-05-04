import { makeStyles } from "@material-ui/core/styles";

const UserItemStyles = makeStyles((theme) => ({
  root: {
    width: 275,
    margin: theme.spacing(2),
  },
  media: {
    height: 130,
  },
  alignText: {
    display: "inline-block",
    verticalAlign: "middle",
  },
  link: {
    textDecoration: "none",
    textTransform: "none",
    color: "black",
  },
}));

export default UserItemStyles;
