import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserModal } from 'src/app/modals/user-list.modal';
import { UserListStateService } from '../../store/state/user-list.state.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList:any
  updatedUserDetail: any;

  constructor(private _userListStateService: UserListStateService) { }

  ngOnInit(): void {
    this.getSubscribeUserList(1637);
  }

  editUser(userDetail: UserModal) {
    this.updatedUserDetail = userDetail;
  }

  deleteUser(id: number) {
    this._userListStateService.dispatchDeleteUser(id);
  }

  getSubscribeUserList(userId: number) {
    this._userListStateService.dispatchUserList(userId);
    this._userListStateService.getUserList$().subscribe(res => {
      this.userList = res;
    })
  }
}