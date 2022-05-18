import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css'],
})
export class AdminsComponent implements OnInit {
  admins: Admin[] = [];
  adminAddForm: FormGroup;
  adminFilter=""

  adminUpdateAndDeleteForm: FormGroup;
  admin: Admin = { adminId: 0, userId: 0 };
  
  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAdmins();
    this.createAdminAddForm();
    this.createAdminUpdateAndDeleteForm();
  }

  getAdmins() {
    this.adminService.getAdmins().subscribe((response) => {
      this.admins = response.data;
      this.dataLoaded = true;
    });
  }

  createAdminDetail(admin: Admin) {
    this.adminService.detailAdmin(admin.adminId).subscribe((response) => {
      this.admin = response.data;
      this.createAdminUpdateAndDeleteForm();
    });
  }

  createAdminUpdateAndDeleteForm() {
    this.adminUpdateAndDeleteForm = this.formBuilder.group({
      adminId: [this.admin.adminId, Validators.required],
      userId: [this.admin.userId, Validators.required],
    });
  }

  
  createAdminAddForm() {
    this.adminAddForm = this.formBuilder.group({
      userId: ['', Validators.required],
    });
  }

  add() {
    if (this.adminAddForm.valid) {
      let adminModel = Object.assign({}, this.adminAddForm.value);
      this.adminService.addAdmin(adminModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Success');
          window.location.reload();
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

  delete() {
    if (this.adminUpdateAndDeleteForm.valid) {
      let adminModel = Object.assign({}, this.adminUpdateAndDeleteForm.value);
      this.adminService.deleteAdmin(adminModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Success');
          window.location.reload();
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

  update() {
    if (this.adminUpdateAndDeleteForm.valid) {
      let adminModel = Object.assign({}, this.adminUpdateAndDeleteForm.value);
      this.adminService.updateAdmin(adminModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Success');
          window.location.reload();
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
