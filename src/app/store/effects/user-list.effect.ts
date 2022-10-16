import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { map, catchError, exhaustMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserListService } from '../../service/user-list.service';
import { UserModal } from '../../modals/user-list.modal';
import {
    createUser,
    createUserSuccess,
    createUserFailure,
    updateUser,
    updateUserSuccess,
    updateUserFailure,
    LoadUserListAction,
    userListSuccess,
    userListFailure,
    deleteUser,
    deleteUserSuccess,
    deleteUserFailure  
} from '../action/user-list.action';

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
                    catchError(res => {
                        alert('Something went wrong')
                        return of( userListFailure())
                    })
                )
            })
        )
    })

    createUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(createUser),
            exhaustMap(action => {
                return this.userListService.addUser(action.userDetail)
                .pipe(
                    map( _ => {
                        return createUserSuccess({userDetail: action.userDetail})
                    }),
                    catchError(res=> {
                        alert('Unable to create user');
                        return of(createUserFailure())
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
                    }),
                    catchError(res=> {
                        alert('Unable to create user');
                        return of(updateUserFailure())
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
                    }),
                    catchError(res=> {
                        alert('Unable to create user');
                        return of(deleteUserFailure())
                    })
                )
            })
        )
    })
}