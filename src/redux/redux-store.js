import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import userReducer from "./user_reducer";
import authReducer from "./auth_reducer";
import settingsReducer from "./settings_reducer";
import appReducer from "./app_reducer";
import weatherReducer from "./weather_reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: userReducer,
  settingsPage: settingsReducer,
  authData: authReducer,
  app: appReducer,
  weather: weatherReducer,
  form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
