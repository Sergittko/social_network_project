import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { authoriseTh, logOutTh } from "../../redux/auth_reducer";
import { setLoginedUserId } from "../../redux/profile_reducer";

class HeaderClassComponent extends React.Component {
  setUserId = defaultId => {
    this.props.setLoginedUserId(defaultId);
  };

  render() {
    return (
      <Header
        isAuthoriserd={this.props.isAuthoriserd}
        login={this.props.login}
        switchProfile={this.setUserId}
        logOut={this.props.logOutTh}
      />
    );
  }
}

let mapStateToProps = state => {
  return {
    isAuthoriserd: state.authData.isAuthoriserd,
    login: state.authData.login,
  };
};

let HeaderContainer = connect(mapStateToProps, {
  authoriseTh,
  setLoginedUserId,
  logOutTh
})(HeaderClassComponent);

export default HeaderContainer;
