import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  getUsersTh,
  unfollowTh,
  followTh,
  getFollowedUsersTh
} from "../../redux/user_reducer";
import usersCss from "./Users.module.css";
import {
  getUsers,
  getPagination,
  getIsLoading,
  getIsFetching
} from "../../redux/users_selector";

class UsersClassComponent extends React.Component {
  componentDidMount() {
    this.props.getUsersTh(
      this.props.pagination.pageSize,
      this.props.pagination.currentPage
    );
  }

  setCurrentPage = (pageNumber, searchFollowed) => {
    if (!searchFollowed) {
      this.props.getFollowedUsersTh(this.props.pagination.pageSize, pageNumber);
    } else {
      this.props.getUsersTh(this.props.pagination.pageSize, pageNumber);
    }
  };
  setFollowedUsers = searchFollowed => {
    if (searchFollowed) {
      this.props.getFollowedUsersTh(this.props.pagination.pageSize, 1);
    } else {
      this.props.getUsersTh(this.props.pagination.pageSize, 1);
    }
  };

  render() {
    return (
      <div>
        <h1 className={usersCss.header}>Users</h1>
        <Users
          users={this.props.users}
          totalCount={this.props.pagination.totalCount}
          pageSize={this.props.pagination.pageSize}
          currentPage={this.props.pagination.currentPage}
          isFetching={this.props.isFetching}
          follow={this.props.followTh}
          unFollow={this.props.unfollowTh}
          setCurrentPage={this.setCurrentPage}
          isLoading={this.props.isLoading}
          setFollowedUsers={this.setFollowedUsers}
        />
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    users: getUsers(state),
    pagination: getPagination(state),
    isLoading: getIsLoading(state),
    isFetching: getIsFetching(state)
  };
};

let UsersContainer = connect(mapStateToProps, {
  getUsersTh,
  getFollowedUsersTh,
  unfollowTh,
  followTh
})(UsersClassComponent);

export default UsersContainer;
