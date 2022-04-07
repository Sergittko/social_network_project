import { profileAPI } from "../api/api.js";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE_POST";
const LIKE_POST = "LIKE_POST";
const SET_PROFILE_DATA = "SET_PROFILE_DATA";
const SET_LOGINED_USER_ID = "SET_LOGINED_USER_ID";
const SET_USER_STATUS = "SET_USER_STATUS";
const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";
const UPDATE_USER_PHOTO = "UPDATE_USER_PHOTO";

let initialState = {
  status: "",
  userInfoData: null,
  postsData: [
    {
      liked: false,
      likesNumber: 99,
      dataId: 1,
      message: "Tarrantino and Nolan are films genius!!"
    },
    {
      liked: true,
      likesNumber: 7,
      dataId: 2,
      message:
        "Found a cool citate from Kill Bill, like and ill send u in messages it"
    },
    {
      liked: false,
      likesNumber: 9,
      dataId: 3,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, aspernatur velit. Ea provident vitae eaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque cum, dicta minima excepturi aliquid ea laboriosam odit beatae, accusantium unde magnam, sapiente earum quibusdam cupiditate reiciendis nam porro quidem ullam reprehenderit ab impedit quas illum. Odio qui debitis deserunt tenetur, provident, rem consequuntur perspiciatis eius magni iste, ex atque magnam voluptatibus molestias commodi. Assumenda quam, ratione quia cumque voluptatem, nesciunt facilis non, mollitia dolor corporis saepe illo optio fugit neque. Neque ipsa nulla ab adipisci? Ab non enim dolore possimus eaque neque odio vel magni veniam nam molestiae repellat, veritatis quas ipsum, voluptate rem et, est qui iste repudiandae eius."
    }
  ]
};
let newId = 5;

export const addPost = postText => ({
  type: ADD_POST,
  postText
});
export const deletePost = deleteId => ({
  type: DELETE_POST,
  deleteId
});
export const likePost = (postId, liked, likesNumber) => ({
  type: LIKE_POST,
  postId,
  liked,
  likesNumber
});
export const setProfileData = data => ({
  type: SET_PROFILE_DATA,
  data
});
export const setLoginedUserId = loginedUserId => ({
  type: SET_LOGINED_USER_ID,
  loginedUserId
});
export const setUserStatus = status => ({
  type: SET_USER_STATUS,
  status
});
export const updateUserStatus = status => ({
  type: UPDATE_USER_STATUS,
  status
});
export const updateUserPhoto = (imageSmall, imageLarge) => ({
  type: UPDATE_USER_PHOTO,
  imageSmall,
  imageLarge
});

export const getUserProfileTh = (userFromParams, authorisedUser) => async dispatch => {
  let userId = !userFromParams ? authorisedUser : userFromParams;
  let data = await profileAPI.getUserProfile(userId);
  dispatch(setProfileData(data));
  let response = await profileAPI.getUserStatus(userId);
  dispatch(setUserStatus(response.data));
};
export const updateUserStatusTh = status => async dispatch => {
  let response = await profileAPI.updateProfileStatus(status);
  if (response.data.resultCode === 0) dispatch(updateUserStatus(status));
};
export const updateUserPhotoTh = image => async dispatch => {
  let response = await profileAPI.updateProfilePhoto(image);
  if (response.data.resultCode === 0)
    dispatch(
      updateUserPhoto(
        response.data.data.photos.small,
        response.data.data.photos.large
      )
    );
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newData = {
        liked: "false",
        likesNumber: "0",
        dataId: newId,
        message: action.postText
      };
      ++newId;

      return {
        ...state,
        postsData: [newData, ...state.postsData]
      };
    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter(p => p.dataId !== action.deleteId)
      };
    case LIKE_POST:
      let newPostData = state.postsData.map(p =>
        p.dataId === action.postId
          ? { ...p, liked: !action.liked, likesNumber: action.likesNumber }
          : p
      );

      return {
        ...state,
        postsData: newPostData
      };
    case SET_PROFILE_DATA:
      return {
        ...state,
        userInfoData: action.data
      };
    case SET_LOGINED_USER_ID:
      return { ...state, defaultUserId: action.loginedUserId };
    case SET_USER_STATUS:
      return { ...state, status: action.status };
    case UPDATE_USER_STATUS:
      return { ...state, status: action.status };
    case UPDATE_USER_PHOTO:
      return {
        ...state,
        userInfoData: {
          ...state.userInfoData,
          photos: { large: action.imageLarge, small: action.imageSmall }
        }
      };
    default:
      return state;
  }
};



export default profileReducer;
