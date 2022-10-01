import { createAction, props } from '@ngrx/store';
import { User, UserFailureModal } from 'src/app/modals/user.modal';

export const LoadUserList = '[UserList API] UserList API';
export const USER_LIST_SUCCESS = '[UserList API] UserList API Success';
export const USER_LIST_FAILURE = '[UserList API] UserList API Failure';
export const LOADER_ACTION = '[Loading] Loader Action';

export const LoadUserListAction = createAction(
    LoadUserList,
    props<{userId: number}>()
);

export const userListSuccess = createAction(
    USER_LIST_SUCCESS,
    props<{userList: User}>()
);

export const userListFailure = createAction(
    USER_LIST_FAILURE,
    props<{userListFail: UserFailureModal}>()
);

export const showLoader = createAction(
    LOADER_ACTION, 
    props<{status: boolean}>()
)