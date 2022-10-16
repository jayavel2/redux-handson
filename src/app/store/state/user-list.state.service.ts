import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { LOAD_USER_LIST, CREATE_USER, DELETE_USER, UPDATE_USER, LOADER_ACTION } from '../action/user-list.action';
import { getUser } from '../selector/user-list.selector';

@Injectable({
  providedIn: 'root'
})

export class UserListStateService {

  constructor(private store: Store) { }

  readonly dispatchUserList = (id: number): void => {
    this.store.dispatch({type: LOAD_USER_LIST, userId: id});
  }

  readonly dispatchCreateUser = (userDetail: any): void => {
    this.store.dispatch({type: CREATE_USER, userDetail});
  }

  readonly dispatchUpdateUser = (updatedData: any): void => {
    this.store.dispatch({type: UPDATE_USER, userDetail: updatedData});
  }

  readonly dispatchDeleteUser = (id: number): void => {
    this.store.dispatch({type: DELETE_USER, userId: id});
  }

  readonly dispatchLoader = (status: boolean): void => {
    this.store.dispatch({type: LOADER_ACTION, showLoader: status});
  }

  getUserList$(): Observable<any> {
    return this.store.select(getUser);
  }
}
