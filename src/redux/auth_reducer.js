import { authAPI, profileAPI } from "../api/api.js";
import { stopSubmit } from "redux-form";
import { setLoginedUserId } from "./profile_reducer";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";
const GET_USER_IMAGE = "GET_USER_IMAGE";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuthoriserd: false,
  captchaUrl: null,
  userImage: null
};

export const setAuthUserData = (id, email, login, isAuthoriserd) => ({
  type: SET_AUTH_USER_DATA,
  data: {
    id,
    email,
    login,
    isAuthoriserd
  }
});
const setProfileImage = userImage => ({
  type: GET_USER_IMAGE,
  userImage
});
export const setCaptchaUrl = url => ({
  type: SET_CAPTCHA_URL,
  url
});

export const authoriseTh = () => async dispatch => {
  let response = await authAPI.getMeAuth();
  if (response.resultCode === 0) {
    let { id, email, login } = response.data;
    dispatch(setAuthUserData(id, email, login, true));
    dispatch(setLoginedUserId(id));
    dispatch(setCaptchaUrl(null));
    let data = await profileAPI.getUserProfile(id);
    dispatch(setProfileImage(data.photos.large));
  }
};
export const logInTh = (email, password, rememberMe, captcha) => async dispatch => {
  let response = await authAPI.logIn(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) {
    dispatch(authoriseTh(true));
  } else {
    if(response.data.resultCode === 10) dispatch(getCaptchaUrl());
    let message =
      response.data.messages.length > 0
        ? response.data.messages[0]
        : "Sometging gone wrong";
    dispatch(stopSubmit("login", { _error: message }));
  }
};
export const logOutTh = () => async dispatch => {
  let response = await authAPI.logOut();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
export const getCaptchaUrl = () => async dispatch => {
  let response = await authAPI.getCaptchaUrl();
    dispatch(setCaptchaUrl(response.data.url));
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuthoriserd: action.data.isAuthoriserd
      };
    case GET_USER_IMAGE:
      return {
        ...state,
        userImage: action.userImage
      };
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.url
      };
    default:
      return state;
  }
};

export default authReducer;
