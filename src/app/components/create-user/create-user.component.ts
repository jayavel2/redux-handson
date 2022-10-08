import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { createUserSuccess } from 'src/app/store/action/user-list.action';
import { UserListStateService } from 'src/app/store/state/user-list.state.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private fb: FormBuilder, private userListStateService: UserListStateService) { }

  userForm : FormGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      contactnumber: ['', Validators.required],
      address: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.userForm.valid) {
      const userDetail = {
        id: Math.random(),
        ...this.userForm.value
      }
      this.userListStateService.dispatchCreateUser(userDetail);
      this.userForm.reset();
    }
  }
}
