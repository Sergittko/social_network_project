import React, { useState } from "react";
import posts from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm, reset } from "redux-form";
import { Textarea } from "../../common/FormControls/FormControls";
import { maxLength } from "../../../util/validators";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const maxLengthText = maxLength(5000);
let MyPostsForm = props => {
  let [scrollHeight, changeScrollHeight] = useState(47);
  let onChange = e => {
    if (e.target.scrollHeight !== scrollHeight && scrollHeight < 140 ) {
      changeScrollHeight(e.target.scrollHeight);
    }
  };
  return (
    <form onSubmit={props.handleSubmit} className={posts.app__posts_input}>
      <div className={posts.posts__input_text}>
        <Field
          component={Textarea}
          name="postTextarea"
          validate={[maxLengthText]}
          id="postTextarea"
          placeholder="Type your post..."
          maxLength="1000"
          autoFocus
          onChange={onChange}
          style={{ height: scrollHeight }}
        />
      </div>
      <div className={posts.posts__input_button}>
        <button>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </form>
  );
};

MyPostsForm = reduxForm({ form: "profilePostInput" })(MyPostsForm);

const MyPosts = React.memo(props => {
  let [addPostMode, switchAddPostMode] = useState(false);

  let postsComponent = props.data.map(elem => (
    <Post
      key={elem.dataId}
      liked={elem.liked}
      likesNumber={elem.likesNumber}
      dataId={elem.dataId}
      message={elem.message}
      userPhoto={props.userPhoto}
    />
  ));
  const onPostSubmit = (postText, dispatch) => {
    !!postText.postTextarea && props.addPost(postText.postTextarea);
    dispatch(reset("profilePostInput"));
  };

  return (
    <div className={posts.app__posts}>
      <button
        className={posts.addPost}
        onClick={() => switchAddPostMode(!addPostMode)}
      >
        {addPostMode ? "Remove" : "Add post"}
      </button>
      {addPostMode && (
        <div className={posts.app__posts_input}>
          <MyPostsForm onSubmit={onPostSubmit} />
        </div>
      )}

      <div className={posts.app__blog}>{postsComponent}</div>
    </div>
  );
});

export default MyPosts;
