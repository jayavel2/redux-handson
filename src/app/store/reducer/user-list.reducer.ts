import { createReducer, on } from '@ngrx/store';
import { userListSuccess, userListFailure, showLoader, loadUsers } from '../action/user-list.action';
import { adapter, userInitialState } from '../state/app.index';
 
export const initialState = {
  userListSuccessRes: [],
  isUserList: [],
  userListFailureRes: [],
  showLoading: false,
}
 
const _userListReducer = createReducer(
  userInitialState,
  on(loadUsers, (state, action)=> {
    return adapter.addMany(action.users, state)
  }),
  on(userListSuccess, (state, action) => {
    return adapter.addMany(action.users, state)
  }),
  // on(userListFailure, (state, action) => {
  //   return {
  //     ...state,
  //     userListFailureRes: {
  //       ...state.userListFailureRes,
  //       [`${action.userListFail.id}`]: action.userListFail.userListFail
  //     },
  //     isUserList : {
  //       ...state.isUserList,
  //       [`${action.userListFail.id}`]: false
  //     }
  //   }
  // }),
  // on(showLoader, (state, action) => {
  //   return {
  //     ...state,
  //     showLoading : action.status,
  //     userListFailureRes: []
  //   }
  // })
);

export function UserListReducer(state: any, action: any) {
  return _userListReducer(state, action);
}