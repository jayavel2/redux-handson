import { ActionReducerMap } from '@ngrx/store';
import { UserListReducer } from './user-list.reducer';
import {USER_LIST} from '../selector/user-list.selector';

export const userListReducer: ActionReducerMap<any> = {
    [USER_LIST]: UserListReducer
}