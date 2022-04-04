import React from "react";
import style from "./Profile.module.css";
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
      {props.defaultUserId === props.userInfoData?.userId ? (
        <MyPostsContainer userPhoto={props.userInfoData.photos.large}/>
      ) : (
        <div className={style.noPosts}>
          {props.userInfoData?.fullName} has no posts
        </div>
      )}
    </div>
  );
};

export default Profile;
