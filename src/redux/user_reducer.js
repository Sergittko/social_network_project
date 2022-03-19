import { usersAPI } from "../api/api.js";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_PAGINATION = "SET_PAGINATION";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const IS_LOADING = "IS_LOADING";
const FOLLOW_IS_FETCHING = "FOLLOW_IS_FETCHING";

let initialState = {
  users: [],
  pagination: {
    totalCount: 0,
    pageSize: 5,
    currentPage: 1
  },
  isLoading: false,
  isFetching: []
};

export const follow = value => ({
  type: FOLLOW,
  userId: value
});
export const unFollow = value => ({
  type: UNFOLLOW,
  userId: value
});
export const setUsers = value => ({
  type: SET_USERS,
  newUsers: value
});
export const setPagination = value => ({
  type: SET_PAGINATION,
  paginationData: value
});
export const setCurrentPage = value => ({
  type: SET_CURRENT_PAGE,
  currentPage: value
});
export const preloader = value => ({
  type: IS_LOADING,
  isLoading: value
});
export const followIsFetching = (value, id) => ({
  type: FOLLOW_IS_FETCHING,
  isFetching: value,
  id
});

export const getUsersTh = (pageSize, currentPage) => async dispatch => {
  dispatch(setCurrentPage(currentPage));
  dispatch(preloader(true));
  let data = await usersAPI.getUsers(pageSize, currentPage);
  dispatch(preloader(false));
  dispatch(setUsers(data.items));
  dispatch(setPagination(data.totalCount));
};
export const getFollowedUsersTh = (pageSize, currentPage) => async dispatch => {
  dispatch(setCurrentPage(currentPage));
  dispatch(preloader(true));
  let data = await usersAPI.getFollowedUsers(pageSize, currentPage, true);
  dispatch(preloader(false));
  dispatch(setUsers(data.items));
  dispatch(setPagination(data.totalCount));
};
export const unfollowTh = userId => async dispatch => {
  dispatch(followIsFetching(true, userId));
  let data = await usersAPI.unfollow(userId);
  if (data.resultCode === 0) dispatch(unFollow(userId));
  dispatch(followIsFetching(false, userId));
};
export const followTh = userId => async dispatch => {
  dispatch(followIsFetching(true, userId));
  let data = await usersAPI.follow(userId);
  if (data.resultCode === 0) dispatch(follow(userId));
  dispatch(followIsFetching(false, userId));
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        })
      };
    case SET_USERS:
      return { ...state, users: [...action.newUsers] };
    case SET_PAGINATION:
      return {
        ...state,
        pagination: { ...state.pagination, totalCount: action.paginationData }
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        pagination: { ...state.pagination, currentPage: action.currentPage }
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case FOLLOW_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
          ? [...state.isFetching, action.id]
          : state.isFetching.filter(id => id !== action.id)
      };
    default:
      return state;
  }
};

export default userReducer;
