import Header from "./Header";
import { connect } from "react-redux";
import { setIsMenuOpen } from "../../actions/commonActions";

const HeaderContainer = (props) => {
  return <Header {...props} />;
};

let mstp = (state) => ({
  isMenuOpen: state.commonElements.isMenuOpen,
});

export default connect(mstp, { setIsMenuOpen })(HeaderContainer);
