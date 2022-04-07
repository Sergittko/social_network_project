import React from "react";
import post from "./Post.module.css";
import defaultUser from "../../../../../src/assets/userImages/user_default.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Post = props => {
  let like = e => {
    let data = e.currentTarget.dataset;
    let likesNumber = JSON.parse(data.likesnumber);
    let liked = JSON.parse(data.liked);
    let id = JSON.parse(data.id);
    liked ? --likesNumber : ++likesNumber;
    props.likePost(id, liked, likesNumber);
  };

  return (
    <div>
      <div className={post.app__blog_elem}>
        <img
          className={post.app__blog_image}
          src={defaultUser && props.userPhoto}
          alt=""
        />
        <p className={post.app__blog_text}>{props.message}</p>
        <div className={post.like_block}>
          <span span-id={props.dataId}>{props.likesNumber}</span>
          <button
            data-liked={props.liked}
            data-id={props.dataId}
            data-likesnumber={props.likesNumber}
            className={post.like_button}
            onClick={like}
          >
            <FontAwesomeIcon icon={faThumbsUp} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
