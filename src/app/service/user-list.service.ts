import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserModal } from '../modals/user-list.modal';
import { User, UserFailureModal } from '../modals/user.modal';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private _http: HttpClient) { }

  getUserList(id: number): Observable<UserModal[]> {
    return this._http.get<UserModal[]>(`api/userList/getUserList/${id}`)
  }

  getFormatUserList(userListRes: any, id: number) {
    const userList = new User(userListRes, id);
    return userList;
  }

  getFailureResponse(userListRes: any, id: number) {
    const userList = new UserFailureModal(userListRes, id);
    return userList;
  }
}
