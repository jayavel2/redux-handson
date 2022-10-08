import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter } from '../state/app.index';
 
export const USER_LIST = 'userList'; // global node - reducer

export const userList = createFeatureSelector<any>(USER_LIST);

export const userSelector = adapter.getSelectors();

export const getUser = createSelector(userList, userSelector.selectAll)