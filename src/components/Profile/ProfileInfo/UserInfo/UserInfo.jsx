import React from "react";
import user from "./UserInfo.module.css";
import UserInfoStatus from "./UserInfoStatus/UserInfoStatus";
import defaultUser from "../../../../assets/userImages/user_default.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faVk,
  faYoutube,
  faGit,
  faLinkedin,
  faGrav
} from "@fortawesome/free-brands-svg-icons";

const UserInfo = props => {
  let networkIcons = {
    facebook: faFacebook,
    instagram: faInstagram,
    twitter: faTwitter,
    vk: faVk,
    youtube: faYoutube,
    github: faGit,
    mainLink: faLinkedin,
    website: faGrav
  };

  return (
    <div className={user.app__user_information}>
      <div className={user.userPhotoContainer}>
        <img
          className={user.app__content_avatar}
          src={props.imageSrc != null ? props.imageSrc : defaultUser}
          alt=""
        />
      </div>

      <div className={user.app__user_data}>
        <p className={user.user__name}>{props.name}</p>
        <p>
          Description:{" "}
          {props.about != null ? props.about : "no profile description"}
        </p>
        <p>Looking for a job: {props.lookingForAJob ? "Yes" : "No"}</p>
        <UserInfoStatus
          status={props.status}
          updateStatus={props.updateStatus}
          defaultUserId={props.defaultUserId}
          userId={props.id}
        />
        <p>User ID: {props.id}</p>
      </div>
      <div className={user.userContactsContainer}>
        {Object.keys(props.contacts).map(key => {
          if (props.contacts[key]) {
            return (
              <UserContacts
                key={key}
                link={props.contacts[key]}
                contactName={<FontAwesomeIcon icon={networkIcons[key]} />}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

const UserContacts = props => {
  return (
    <div className={user.contactsLink}>
      <a href={props.link} target="_blank" rel="noreferrer">
        {props.contactName}
      </a>
    </div>
  );
};

export default UserInfo;
