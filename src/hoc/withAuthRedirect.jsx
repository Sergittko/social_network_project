import React from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";

let mapStateToProps = state => ({
  isAuth: state.authData.isAuthoriserd
});

export let withAuthRedirect = Component => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={"/login"} />;
      return <Component {...this.props} />;
    }
  }

  let withAuthRedirectConnected = connect(
    mapStateToProps,
    {}
  )(RedirectComponent);

  return withAuthRedirectConnected;
};
