import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logOutTh } from "../../redux/auth_reducer";
import { setLoginedUserId } from "../../redux/profile_reducer";

class HeaderClassComponent extends React.Component {
  setUserId = defaultId => {
    this.props.setLoginedUserId(defaultId);
  };

  render() {
    return (
      <Header
        isAuthoriserd={this.props.isAuthoriserd}
        userImage={this.props.userImage}
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
    userImage: state.authData.userImage,
    login: state.authData.login,
  };
};

let HeaderContainer = connect(mapStateToProps, {
  setLoginedUserId,
  logOutTh
})(HeaderClassComponent);

export default HeaderContainer;
