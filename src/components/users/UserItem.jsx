import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Person from "../assets/images/person.png";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import UserItemStyles from "./styles/UserItemStyles";

const UserItem = ({
  user,
  arrayBufferToBase64,
  getNormalDate,
  getShortText,
}) => {
  let classes = UserItemStyles();

  return (
    <Grid item>
      <NavLink to={"/dashboard/profile/" + user.id} className={classes.link}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={
                user.avatar
                  ? "data:image/png;base64," +
                    arrayBufferToBase64(user.avatar).base64
                  : Person
              }
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h6">
                {`${user.firstName} ${user.lastName}`}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <DateRangeRoundedIcon />
                  </Grid>
                  <Grid item>
                    {getNormalDate(user.dateRegistered).validDate}
                  </Grid>
                </Grid>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <InfoOutlinedIcon />
                  </Grid>
                  <Grid item>
                    {user.aboutMe
                      ? getShortText(user.aboutMe + "").text
                      : "No detailed info"}
                  </Grid>
                </Grid>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Grid container direction="row" alignItems="center">
                  <Grid item>
                    <BusinessCenterOutlinedIcon />
                  </Grid>
                  <Grid item>{user.totalTask}</Grid>
                </Grid>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </NavLink>
    </Grid>
  );
};

export default UserItem;
