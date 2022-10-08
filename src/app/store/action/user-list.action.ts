import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { UserModal } from 'src/app/modals/user-list.modal';

export const CREATE_USER = '[User API] Create User';
export const CREATE_USER_SUCCESS = '[User API] Create User API Success';

export const UPDATE_USER = '[User API] Update User'
export const UPDATE_USER_SUCCESS = '[User API] Update User API Success';

export const DELETE_USER = '[User API] Delete User'
export const DELETE_USER_SUCCESS = '[User API] Delete User API Success';

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
    props<{users: UserModal[]}>()
);

// export const userListFailure = createAction(
//     USER_LIST_FAILURE,
//     props<{userListFail: UserFailureModal}>()
// );

export const showLoader = createAction(
    LOADER_ACTION, 
    props<{status: boolean}>()
)

export const deleteUser = createAction(
    DELETE_USER,
    props<{userId: number}>()
)
export const deleteUserSuccess = createAction(
    DELETE_USER_SUCCESS,
    props<{userId: number}>()
)

export const updateUser = createAction(
    UPDATE_USER,
    props<{userDetail: UserModal}>()
)

export const updateUserSuccess = createAction(
    UPDATE_USER_SUCCESS,
    props<{userDetail: Update<UserModal>}>()
)

export const addUser = createAction(
    CREATE_USER,
    props<{userDetail: UserModal}>()
)
export const createUserSuccess = createAction(
    CREATE_USER_SUCCESS,
    props<{userDetail: UserModal}>()
)
