import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { addPost } from "../../../redux/profile_reducer.js";

let mapStateToProps = state => {
  return {
    data: state.profilePage.postsData,
    postTextareraValue: state.profilePage.postTextareraValue
  };
};

let MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;
