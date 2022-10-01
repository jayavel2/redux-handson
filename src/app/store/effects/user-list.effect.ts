import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, catchError, exhaustMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserListService } from '../../service/user-list.service';
import { LoadUserListAction, userListSuccess, userListFailure } from '../action/user-list.action';
import { Store, select } from '@ngrx/store';
import { isUserList } from '../selector/user-list.selector';
import { UserListStateService } from '../state/user-list.state.service';

@Injectable({
  providedIn: 'root'
})
export class UserListEffect {
    constructor(
        private actions$: Actions,
        private store: Store,
        private userListService: UserListService,
        private _userListStateService: UserListStateService
    ) { }

    userList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LoadUserListAction),
            withLatestFrom(this.store.pipe(select(isUserList))),
            exhaustMap(([action, isUserList]) => {
                const userId = action.userId;
                 return isUserList[userId] ? [] : this.userListService.getUserList(userId)
                 .pipe(
                    map((data) => {
                        const userData = this.userListService.getFormatUserList(data, userId);
                        return userListSuccess({userList: userData});
                    }),
                    catchError(res => {
                        this._userListStateService.dispatchLoader(false);
                        const userFailRes = this.userListService.getFailureResponse(res.error, userId);
                        alert(res.error.status)
                        return of( userListFailure({userListFail: userFailRes}))
                    })
                )
            })
        )
    })
}