import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { LoadUserList, LOADER_ACTION } from '../action/user-list.action';
import { getCacheData, getFailureUserRes, getLoading } from '../selector/user-list.selector';

@Injectable({
  providedIn: 'root'
})

export class UserListStateService {

  constructor(private store: Store) { }

  readonly dispatchUserList = (id: number): void => {
    this.store.dispatch({type: LoadUserList, userId: id});
  }

  readonly dispatchLoader = (loader: boolean): void => {
    this.store.dispatch({type: LOADER_ACTION, status: loader});
  }

  getSelectedUserList$(id: number): Observable<any> {
    return this.store.select(getCacheData(id))
  }

  getSelectedUserListFail$(id: number): Observable<any> {
    return this.store.select(getFailureUserRes(id))
  }

  getLoader$(): Observable<any> {
    return this.store.select(getLoading);
  }
}
