import { authoriseTh } from "./auth_reducer";
import { getWeatherDataTh } from "./weather_reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

const initialState = {
  isInitialized: false
};

export const setInitialized = () => ({
  type: SET_INITIALIZED
});

export const initializeApp = () => async dispatch => {
  await dispatch(authoriseTh());
  await dispatch(getWeatherDataTh(localStorage.getItem('weatherCity')));
  dispatch(setInitialized());
  localStorage.setItem('Apps_Tabs', 'weather')
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        isInitialized: true
      };

    default:
      return state;
  }
};

export default appReducer;
