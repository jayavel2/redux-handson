import { Component, OnInit } from '@angular/core';
import { UserListStateService } from '../store/state/user-list.state.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: any;
  userListFailRes = false;
  showLoading: any;

  constructor(private _userListStateService: UserListStateService) { }

  ngOnInit(): void {
    this.getSubscribeUserList(1637);
    this.showLoading  = this._userListStateService.getLoader$();
  }

  getSubscribeUserList(userId: number) {
    this._userListStateService.dispatchLoader(true);
    this._userListStateService.dispatchUserList(userId);
    this._userListStateService.getSelectedUserList$(userId)
      .subscribe(res => {
        !!res && this._userListStateService.dispatchLoader(false);
        this.userList = res;
      });
    this._userListStateService.getSelectedUserListFail$(userId)
      .subscribe(res => {
        console.log('---------res', res);
        this.userListFailRes = !!res;
      })
  }
}