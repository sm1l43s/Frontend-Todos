import React from "react";
import { connect } from "react-redux";
import Notification from "./Notification";
import { setIsNotification } from "../../../actions/commonActions";

const NotificationContainer = (props) => {
  return <Notification {...props} />;
};

let mstp = (state) => ({
  isNotification: state.commonElements.isNotification,
  messageNotification: state.commonElements.messageNotification,
  severityNotification: state.commonElements.severityNotification,
});

export default connect(mstp, { setIsNotification })(NotificationContainer);
