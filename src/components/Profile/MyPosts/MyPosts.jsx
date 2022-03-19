import React from "react";
import posts from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm, reset } from "redux-form";
import { Textarea } from "../../common/FormControls/FormControls";
import { maxLength } from "../../../util/validators";

const maxLength10 = maxLength(10);

let MyPostsForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className={posts.app__posts_input}>
      <div className={posts.posts__input_text}>
        <Field
          component={Textarea}
          name="postTextarea"
          validate={[maxLength10]}
          id="postTextarea"
          maxLength="1000"
          rows="5"
        />
      </div>
      <div className={posts.posts__input_button}>
        <button>Send</button>
      </div>
    </form>
  );
};

MyPostsForm = reduxForm({ form: "profilePostInput" })(MyPostsForm);

const MyPosts = React.memo(props => {
  let postsComponent = props.data.map(elem => (
    <Post
      key={elem.dataId}
      liked={elem.liked}
      likesNumber={elem.likesNumber}
      dataId={elem.dataId}
      message={elem.message}
    />
  ));

  const onPostSubmit = (postText, dispatch) => {
    props.addPost(postText.postTextarea);
    dispatch(reset("profilePostInput"));
  };

  return (
    <div className={posts.app__posts}>
      <h2>My posts</h2>
      <div className={posts.app__posts_input}>
        <MyPostsForm onSubmit={onPostSubmit} />
      </div>

      <div className={posts.app__blog}>{postsComponent}</div>
    </div>
  );
});

export default MyPosts;
