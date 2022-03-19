import { weatherApi } from "../api/api.js";
// import { stopSubmit } from "redux-form";

const GET_WEATHER_DATA = "GET_WEATHER_DATA";
const GET_SEARCH_DATA = "GET_SEARCH_DATA";
const RESET_WEATHER_DATA = "RESET_WEATHER_DATA";

let initialState = {
  weatherData: null,
  weatherSearchList: null
};

const getWeatherData = data => ({
  type: GET_WEATHER_DATA,
  data
});
const getSearchData = data => ({
  type: GET_SEARCH_DATA,
  data
});
export const resetWeatherData = () => ({
  type: RESET_WEATHER_DATA
});

export const getWeatherDataTh = city => async dispatch => {
  let data = await weatherApi.getWeather(city);
  dispatch(resetWeatherData());
  if (data.data.data.error) {
    // let errorMessage = data.data.data.error[0].msg;
    // dispatch(stopSubmit("weatherSearch", { _error: errorMessage }));
    return false;
  }else {
    dispatch(getWeatherData(data.data));
    return true;
  }
};
export const getSearchDataTh = text => async dispatch => {
  let data = await weatherApi.getSearchedWeather(text);
  dispatch(getSearchData(data.data.search_api?.result));
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.data.data
      };
    case GET_SEARCH_DATA:
      return {
        ...state,
        weatherSearchList: action.data
      };
    case RESET_WEATHER_DATA:
      return {
        ...state,
        weatherSearchList: null
      };
    default:
      return state;
  }
};

export default userReducer;
