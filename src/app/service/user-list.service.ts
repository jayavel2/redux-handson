import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserModal } from '../modals/user-list.modal';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private _http: HttpClient) { }

  getUserList(id: number): Observable<UserModal[]> {
    return this._http.get<UserModal[]>(`api/getUserList/${id}`)
  }

  addUser(userDetail: any): Observable<any> {
    return this._http.post('api/addUser', userDetail);
  }

  updateUser(userDetail: any): Observable<any> {
    return this._http.post('api/updateUser', userDetail);
  }

  deleteUser(userDetail: any): Observable<any> {
    return this._http.post('api/deleteUser', userDetail);
  }
}
