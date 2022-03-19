import React from "react";
// import profile from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = props => {
  return (
    <div>
      <ProfileInfo
        userInfoData={props.userInfoData}
        status={props.status}
        defaultUserId={props.defaultUserId}
        updateStatus={props.updateStatus}
        updatePhoto={props.updatePhoto}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
