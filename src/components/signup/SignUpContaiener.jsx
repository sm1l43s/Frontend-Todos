import React from "react";
import SignUp from "./SignUp";
import { connect } from "react-redux";
import { signup } from "../../thunks/signUpThunks";

const SignUpContainer = (props) => {
  return <SignUp {...props} />;
};

let mstp = (state) => ({
  isRegistered: state.signUp.isRegistered,
  isError: state.signUp.isError,
  errorMessages: state.signUp.errorMessages,
  isFetching: state.commonElements.isFetching,
});

export default connect(mstp, { signup })(SignUpContainer);
