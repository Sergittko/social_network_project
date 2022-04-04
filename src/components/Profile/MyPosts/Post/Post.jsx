import React from "react";
import post from "./Post.module.css";
import defaultUser from "../../../../../src/assets/userImages/user_default.jpg";

document.addEventListener("click", event => {
  if (event.target.getAttribute("name") === "like_btn") {
    let btn_id = event.target.dataset.id;
    let btn_liked = event.target.dataset.liked;
    let span = document.querySelectorAll(`span[span-id='${btn_id}']`);
    let span_count = span[0].innerHTML;
    if (btn_liked === "false") {
      span[0].innerHTML = ++span_count;
      event.target.dataset.liked = "true";
    } else {
      span[0].innerHTML = --span_count;
      event.target.dataset.liked = "false";
    }
  }
});

const Post = props => {
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
            name="like_btn"
            className={post.like_button}
          >
            like
          </button>
        </div>
      </div>
    </div>
  );
};

// Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
// quidem eum, ducimus officia inventore veritatis.
export default Post;
