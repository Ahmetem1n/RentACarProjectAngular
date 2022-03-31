import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from './../../../services/admin.service';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css'],
})
export class AdminUpdateComponent implements OnInit {
  adminUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createAdminUpdateForm();
  }

  createAdminUpdateForm() {
    this.adminUpdateForm = this.formBuilder.group({
      adminId: ['', Validators.required],
      userId: ['', Validators.required],
    });
  }

  update() {
    if (this.adminUpdateForm.valid) {
      let adminModel = Object.assign({}, this.adminUpdateForm.value);
      this.adminService.updateAdmin(adminModel).subscribe(
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
