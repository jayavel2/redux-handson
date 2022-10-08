import { Action, createReducer, on } from '@ngrx/store';
import { userListSuccess, deleteUserSuccess, createUserSuccess, updateUserSuccess } from '../action/user-list.action';
import { adapter, State, userInitialState } from '../state/app.index';
 
const _userListReducer = createReducer(
  userInitialState,
  on(userListSuccess, (state, action) => {
    return adapter.setAll(action.users, state)
  }),
  on(createUserSuccess, (state, action) => {
    return adapter.addOne(action.userDetail, state)
  }),
  on(updateUserSuccess, (state, action) => {
    return adapter.updateOne(action.userDetail, state)
  }),
  on(deleteUserSuccess, (state, action) => {
    return adapter.removeOne(action.userId, state);
  })
);

export function UserListReducer(state: State, action: Action) {
  return _userListReducer(state, action);
}