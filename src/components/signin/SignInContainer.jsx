import { signin } from "../../thunks/authThunks";
import { SignIn } from "./SignIn";
import { connect } from "react-redux";

const SignInContainer = (props) => {
  return <SignIn {...props} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  isFetching: state.commonElements.isFetching,
  isError: state.auth.isError,
  errorMessages: state.auth.errorMessages,
});

export default connect(mapStateToProps, { signin })(SignInContainer);
