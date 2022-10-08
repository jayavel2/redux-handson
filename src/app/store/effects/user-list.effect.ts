import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { map, catchError, exhaustMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserListService } from '../../service/user-list.service';
import { LoadUserListAction, addUser, deleteUserSuccess, createUserSuccess, deleteUser, updateUser, updateUserSuccess, userListSuccess} from '../action/user-list.action';
import { UserModal } from 'src/app/modals/user-list.modal';

@Injectable({
  providedIn: 'root'
})
export class UserListEffect {
    constructor(
        private actions$: Actions,
        private userListService: UserListService
    ) { }

    userList$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(LoadUserListAction),
            exhaustMap((action) => {
                const userId = action.userId;
                 return this.userListService.getUserList(userId)
                 .pipe(
                    map((data) => {
                        return userListSuccess({users: data});
                    }),
                    // catchError(res => {
                    //     const userFailRes = this.userListService.getFailureResponse(res.error, userId);
                    //     alert(res.error.status)
                    //     return of( userListFailure({userListFail: userFailRes}))
                    // })
                )
            })
        )
    })

    createUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addUser),
            exhaustMap(action => {
                return this.userListService.addUser(action.userDetail)
                .pipe(
                    map( _ => {
                        return createUserSuccess({userDetail: action.userDetail})
                    })
                )
            })
        )
    })

    editUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateUser),
            exhaustMap(action => {
                return this.userListService.updateUser(action.userDetail)
                .pipe(
                    map( _ => {
                        const updatedData: Update<UserModal> = {
                            id: action.userDetail.id,
                            changes: {
                                ...action.userDetail
                            }
                        };
                        return updateUserSuccess({userDetail: updatedData})
                    })
                )
            })
        )
    })

    deleteUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteUser),
            switchMap(action => {
                return this.userListService.deleteUser(action.userId)
                .pipe(
                    map( _ => {
                        return deleteUserSuccess({userId: action.userId})
                    })
                )
            })
        )
    })
}