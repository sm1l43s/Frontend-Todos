import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { arrayBufferToBase64, getNormalDate } from "../../../utils/utils";
import {
  updateProfile,
  updateProfilePhoto,
} from "../../../thunks/profileThunks";
import ProfileInfo from "./ProfileInfo";

const ProfileInfoContainer = (props) => {
  return <ProfileInfo {...props} />;
};

let mstp = (state) => ({
  authIdUser: state.auth.user.id,
});

export default compose(
  connect(mstp, {
    arrayBufferToBase64,
    getNormalDate,
    updateProfile,
    updateProfilePhoto,
  })
)(ProfileInfoContainer);
