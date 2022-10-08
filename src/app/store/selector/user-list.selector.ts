import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, AppState } from '../state/app.index';
 
export const USER_LIST = 'userList'; // global node - reducer

export const userList = createFeatureSelector<any>(USER_LIST);

export interface State {
    [USER_LIST]: AppState;
}

export const getUserList = createSelector(userList, (state) => {
    return state.userListSuccessRes || {};
})

export const getUserListFailRes = createSelector(userList, (state) => {
    return state.userListFailureRes || {};
})

export const isUserList = createSelector(userList, (state) => {
    return state.isUserList || {}
})

export const getLoading = createSelector(userList, (state) =>{
    return state.showLoading;
})
export const getCacheData = (id: number) => createSelector(getUserList, isUserList, (userList, isUserCache) => {
    return isUserCache[id] ? userList[id] : null;
})

export const getFailureUserRes = (id: number) => createSelector(getUserListFailRes, (userList) => {
    return userList[id] ?? null;
})

export const userSelector = adapter.getSelectors();

export const getUser = createSelector(userList, userSelector.selectAll)