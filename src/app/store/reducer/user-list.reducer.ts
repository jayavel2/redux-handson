import { createReducer, on } from '@ngrx/store';
import { userListSuccess, userListFailure, showLoader } from '../action/user-list.action';
 
export const initialState = {
  userListSuccessRes: [],
  isUserList: [],
  userListFailureRes: [],
  showLoading: false,
}
 
const _userListReducer = createReducer(
  initialState,
  on(userListSuccess, (state, action) => {
    return {
      ...state,
      userListSuccessRes: {
        ...state.userListSuccessRes,
        [`${action.userList.id}`]: action.userList.userList
      },
      isUserList : {
        ...state.isUserList,
        [`${action.userList.id}`]: true
      }
    }
  }),
  on(userListFailure, (state, action) => {
    return {
      ...state,
      userListFailureRes: {
        ...state.userListFailureRes,
        [`${action.userListFail.id}`]: action.userListFail.userListFail
      },
      isUserList : {
        ...state.isUserList,
        [`${action.userListFail.id}`]: false
      }
    }
  }),
  on(showLoader, (state, action) => {
    return {
      ...state,
      showLoading : action.status,
      userListFailureRes: []
    }
  })
);

export function UserListReducer(state: any, action: any) {
  return _userListReducer(state, action);
}