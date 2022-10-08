import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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

  constructor(private _userListStateService: UserListStateService, private store: Store) { }

  ngOnInit(): void {
    this.getSubscribeUserList(1637);
  }

  getSubscribeUserList(userId: number) {
    this._userListStateService.dispatchUserList(userId);
    this._userListStateService.getUserList$().subscribe(res=>{
      this.userList = res;
    })
  }
}