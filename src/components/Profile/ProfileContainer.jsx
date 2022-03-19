import Profile from "./Profile";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  getUserProfileTh,
  updateUserStatusTh,
  updateUserPhotoTh
} from "../../redux/profile_reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUserProfileTh(
      this.props.match.params.userId,
      this.props.defaultUserId
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.getUserProfileTh(
        this.props.match.params.userId,
        this.props.defaultUserId
      );
    }
  }

  render() {
    return (
      <Profile
        props={this.props}
        {...this.props}
        updateStatus={this.props.updateUserStatusTh}
        updatePhoto={this.props.updateUserPhotoTh}
      />
    );
  }
}

let mapStateToProps = state => {
  return {
    userInfoData: state.profilePage.userInfoData,
    status: state.profilePage.status,
    defaultUserId: state.authData.id
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfileTh,
    updateUserStatusTh,
    updateUserPhotoTh
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
