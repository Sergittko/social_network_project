import React from "react";
import { NavLink } from "react-router-dom";
import userCss from "./UserItem.module.css";
import defaultPhoto from "../../../assets/userImages/user_default.jpg";

let UserItem = props => {
  return (
    <div className={userCss.user__container}>
      <div className={userCss.user__avatar}>
        <div className={userCss.avatar__img_container}>
          <NavLink to={`/profile/${props.user.id}`}>
            <img
              src={
                props.user.photos.small != null ? props.user.photos.small : defaultPhoto
              }
              alt={props.user.fullName}
            />
          </NavLink>
        </div>

        {props.user.followed ? (
          <button
            disabled={props.isFetching.some(e => e === props.user.id)}
            className={userCss.followedBtn}
            onClick={() => props.unFollow(props.user.id)}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={props.isFetching.some(e => e === props.user.id)}
            className={userCss.unfollowedBtn}
            onClick={() => props.follow(props.user.id)}
          >
            Follow
          </button>
        )}
      </div>

      <div className={userCss.user__information}>
        <div className={userCss.user__data}>
          <p>{props.user.name}</p>
          <p>{props.user.status != null ? props.user.status : "no status"}</p>
        </div>
        <div className={userCss.user__location}>
          <p>
            {props.user?.location?.city !== (null || undefined)
              ? props.user.location.city
              : "city"}
          </p>
          <p>
            {props.user?.location?.country !== (null || undefined)
              ? props.user.location.country
              : "country"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
