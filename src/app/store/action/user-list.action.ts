import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { UserModal } from 'src/app/modals/user-list.modal';

export const CREATE_USER = '[User API] Create User';
export const CREATE_USER_SUCCESS = '[User API] Create User API Success';
export const CREATE_USER_FAILURE = '[User API] Create User API Faiure';

export const UPDATE_USER = '[User API] Update User'
export const UPDATE_USER_SUCCESS = '[User API] Update User API Success';
export const UPDATE_USER_FAILURE = '[User API] Update User API Failure';

export const DELETE_USER = '[User API] Delete User'
export const DELETE_USER_SUCCESS = '[User API] Delete User API Success';
export const DELETE_USER_FAILURE = '[User API] Delete User API Failure';

export const LOAD_USER_LIST = '[UserList API] UserList API';
export const USER_LIST_SUCCESS = '[UserList API] UserList API Success';
export const USER_LIST_FAILURE = '[UserList API] UserList API Failure';

export const LOADER_ACTION = '[Loading] Loader Action';

//Create User Action
export const createUser = createAction(
    CREATE_USER,
    props<{userDetail: UserModal}>()
)
export const createUserSuccess = createAction(
    CREATE_USER_SUCCESS,
    props<{userDetail: UserModal}>()
)
export const createUserFailure = createAction(
    CREATE_USER_FAILURE
)

//Update User Action
export const updateUser = createAction(
    UPDATE_USER,
    props<{userDetail: UserModal}>()
)
export const updateUserSuccess = createAction(
    UPDATE_USER_SUCCESS,
    props<{userDetail: Update<UserModal>}>()
)
export const updateUserFailure = createAction(
    UPDATE_USER_FAILURE
)

//List User Action
export const LoadUserListAction = createAction(
    LOAD_USER_LIST,
    props<{userId: number}>()
);
export const userListSuccess = createAction(
    USER_LIST_SUCCESS,
    props<{users: UserModal[]}>()
);
export const userListFailure = createAction(
    USER_LIST_FAILURE
);

//Delete User Action
export const deleteUser = createAction(
    DELETE_USER,
    props<{userId: number}>()
)
export const deleteUserSuccess = createAction(
    DELETE_USER_SUCCESS,
    props<{userId: number}>()
)
export const deleteUserFailure = createAction(
    DELETE_USER_FAILURE
)

// //Loader Action
// export const loaderAction = createAction(
//     LOADER_ACTION, 
//     props<{showLoader: boolean}>()
// )