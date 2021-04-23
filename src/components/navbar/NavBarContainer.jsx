import React from "react";
import { connect } from "react-redux";
import { setIsMenuOpen } from "../../actions/commonActions";
import NavBarWrapper from "./NavBarWrapper";


const NavBarContainer = (props) => {

  return (
      <NavBarWrapper {...props}/>
  );
};

let mstp = (state) => ({
  isMenuOpen: state.commonElements.isMenuOpen,
});

export default connect(mstp, { setIsMenuOpen })(NavBarContainer);
