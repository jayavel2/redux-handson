import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserListStateService } from 'src/app/store/state/user-list.state.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  @Input() updatedUserDetail: any;

  constructor(private fb: FormBuilder, private userListStateService: UserListStateService) { }

  registerForm : FormGroup = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required]],
      contactnumber: ['', Validators.required],
      address: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  ngOnChanges() {
    const {id, name, email, contactnumber, address} = this.updatedUserDetail || {};
    this.registerForm.controls['id'].setValue(id);
    this.registerForm.controls['name'].setValue(name);
    this.registerForm.controls['email'].setValue(email);
    this.registerForm.controls['contactnumber'].setValue(contactnumber);
    this.registerForm.controls['address'].setValue(address);
  }
  onSubmit() {
    if (this.registerForm.valid) {
      this.userListStateService.dispatchUpdateUser(this.registerForm.value);
    }
  }

}
