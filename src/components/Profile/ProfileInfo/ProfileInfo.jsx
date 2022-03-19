import React from "react";
import profile from "./ProfileInfo.module.css";
import UserInfo from "./UserInfo/UserInfo";
import Preloader from "../../common/preloader/Preloader";
import preloaderGif from "../../../img/preloader.gif";

const defaultLargePhoto =
  "https://wallpaperforu.com/wp-content/uploads/2020/07/car-wallpaper-200726122329222048x1152.jpg";

const ProfileInfo = props => {
  if (!props.userInfoData) {
    return <Preloader preloaderGif={preloaderGif} />;
  }
  return (
    <div>
      <div className={profile.profileContainer}>
        <img
          className={profile.app__content_image}
          src={
            props.userInfoData.photos.large != null
              ? props.userInfoData.photos.large
              : defaultLargePhoto
          }
          alt=""
        />
      </div>
      <UserInfo
        key={props.userInfoData.userId}
        id={props.userInfoData.userId}
        defaultUserId={props.defaultUserId}
        name={props.userInfoData.fullName}
        about={props.userInfoData.aboutMe}
        lookingForAJob={props.userInfoData.lookingForAJob}
        status={props.status}
        imageSrc={props.userInfoData.photos.large}
        updateStatus={props.updateStatus}
        updatePhoto={props.updatePhoto}
        contacts={props.userInfoData.contacts}
      />
    </div>
  );
};

export default ProfileInfo;
