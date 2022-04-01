import { User } from './../../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css'],
})
export class UserDeleteComponent implements OnInit {
  userDeleteForm: FormGroup;
  user: User;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createUserDeleteForm();
  }

  createUserDeleteForm() {
    this.userDeleteForm = this.formBuilder.group({
      userId: [this.user.userId, Validators.required],
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      nationalityId: [this.user.nationalityId, Validators.required],
      birthYear: [this.user.birthYear, Validators.required],
      email: [this.user.email, Validators.required],
      photo: [this.user.photo, Validators.required],
      status: [this.user.status, Validators.required],
    });
  }

  delete() {
    if (this.userDeleteForm.valid) {
      let userModel = Object.assign({}, this.userDeleteForm.value);
      this.userService.deleteUser(userModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Success');
        },
        (responseError) => {
          if (
            responseError.error.ValidationErrors &&
            responseError.error.ValidationErrors.length > 0
          ) {
            for (
              let i = 0;
              i < responseError.error.ValidationErrors.length;
              i++
            ) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                'Validation Error'
              );
            }
          } else {
            this.toastrService.error(responseError.error.message, 'Error');
          }
        }
      );
    } else {
      this.toastrService.error('Form not completed', 'Warning');
    }
  }
}
