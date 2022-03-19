import { profileAPI } from "../api/api.js";
import { stopSubmit } from "redux-form";

const SET_SETTINGS_PROFILE_DATA = "SET_SETTINGS_PROFILE_DATA";
const UPDATE_USER_PHOTO = "UPDATE_USER_PHOTO";

let initialState = {
  userData: null,
};

export const setProfileData = data => ({
  type: SET_SETTINGS_PROFILE_DATA,
  data
});
export const updateUserPhoto = (imageSmall, imageLarge) => ({
  type: UPDATE_USER_PHOTO,
  imageSmall,
  imageLarge
});

export const getUserProfileTh = (userId) => async dispatch => {
  let data = await profileAPI.getUserProfile(userId);
  dispatch(setProfileData(data));
};
export const setProfileSettingsTh = (data) => async dispatch =>{
  let response = await profileAPI.updateProfileSettings(data);
  if (response.data.resultCode !== 0) {
    let errorMessage = response.data.messages;
    errorMessage.forEach(error => {
      dispatch(stopSubmit("settings", { _error: errorMessage }));
    });
  }
}
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

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SETTINGS_PROFILE_DATA:
      return {
        ...state,
        userData: action.data
      };
    case UPDATE_USER_PHOTO:
      return {
        ...state,
        userData: {
          ...state.userData,
          photos: { large: action.imageLarge, small: action.imageSmall }
        }
      };
    default:
      return state;
  }
};

export default settingsReducer;
