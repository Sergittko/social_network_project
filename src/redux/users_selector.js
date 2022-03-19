import { createSelector } from "reselect";
export const getUsers = state => state.usersPage.users;
export const getUsersSelector = createSelector(getUsers, users => {
  users.filter(u => true);
});
export const getPagination = state => state.usersPage.pagination;
export const getIsLoading = state => state.usersPage.isLoading;
export const getIsFetching = state => state.usersPage.isFetching;
