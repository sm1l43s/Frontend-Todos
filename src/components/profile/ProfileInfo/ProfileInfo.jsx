import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import DoneIcon from "@material-ui/icons/Done";
import EditProfile from "./EditProfile";
import EditPhoto from "./EditPhoto";
import Person from "../../assets/images/person.png";
import Chip from "@material-ui/core/Chip";
import ProfileInfoStyles from "./styles/ProfileInfoStyles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardMedia from "@material-ui/core/CardMedia";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const ProfileInfo = ({
  profile,
  arrayBufferToBase64,
  getNormalDate,
  authIdUser,
  updateProfile,
  updateProfilePhoto,
}) => {
  const classes = ProfileInfoStyles();

  const [open, setOpen] = useState(false);
  const [openPhoto, setOpenPhoto] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenPhoto = () => {
    setOpenPhoto(true);
  };

  const handleClosePhoto = () => {
    setOpenPhoto(false);
  };

  return (
    <Card className={classes.root}>
      {open && (
        <EditProfile
          profile={profile}
          open={open}
          updateProfile={updateProfile}
          handleClose={handleClose}
        />
      )}

      {openPhoto && (
        <EditPhoto
          updateProfilePhoto={updateProfilePhoto}
          open={openPhoto}
          handleClose={handleClosePhoto}
        />
      )}
      <CardHeader
        action={
          authIdUser === profile.id && (
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={`${profile.lastName} ${profile.firstName}`}
        subheader={`${getNormalDate(profile.dateRegistered).validDate}`}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleClickOpen}>Edit profile</MenuItem>
        <MenuItem onClick={handleClickOpenPhoto}>Edit photo</MenuItem>
      </Menu>
      <CardMedia>
        <img
          className={classes.cardMedia}
          src={
            profile.avatar
              ? "data:image/png;base64," +
                arrayBufferToBase64(profile.avatar).base64
              : Person
          }
          alt="avatar"
        />
      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <InfoOutlinedIcon className={classes.smallIcon} />
            </Grid>
            <Grid item>{profile.aboutMe || "No description"}</Grid>
          </Grid>
          <Typography variant="subtitle2" color="textSecondary">
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <BusinessCenterOutlinedIcon className={classes.smallIcon} />
              </Grid>
              <Grid item>
                <b pr={1}>{` ${profile.totalTask} `}</b>
                {` total tasks`}
              </Grid>
            </Grid>
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <Chip
                  size="small"
                  label={`${profile.completedTask} completed task`}
                  onDelete={() => {}}
                  deleteIcon={<DoneIcon className={classes.green} />}
                  variant="outlined"
                  className={classes.green}
                  color="primary"
                />
              </Grid>
            </Grid>
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <div className={classes.spacing}>
                  <Chip
                    size="small"
                    label={`${profile.failedTask} failed task`}
                    onDelete={() => {}}
                    variant="outlined"
                    color="secondary"
                  />
                </div>
              </Grid>
            </Grid>
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileInfo;
