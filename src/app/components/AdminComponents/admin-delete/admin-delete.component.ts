import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.css'],
})
export class AdminDeleteComponent implements OnInit {
  adminDeleteForm: FormGroup;
  admin: Admin = { adminId: 0, userId: 0 };
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private adminService: AdminService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['adminId']) {
        this.adminService
          .detailAdmin(params['adminId'])
          .subscribe((response) => {
            this.admin = response.data;
            console.log(this.admin);
            this.createAdminDeleteForm();
          });
      }
    });
    this.createAdminDeleteForm();
  }

  createAdminDeleteForm() {
    this.adminDeleteForm = this.formBuilder.group({
      adminId: [this.admin.adminId, Validators.required],
      userId: [this.admin.userId, Validators.required],
    });
  }

  delete() {
    if (this.adminDeleteForm.valid) {
      let adminModel = Object.assign({}, this.adminDeleteForm.value);
      this.adminService.deleteAdmin(adminModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
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
                'Doğrulama Hatası'
              );
            }
          } else {
            this.toastrService.error(responseError.error.message, 'Hata');
          }
        }
      );
    } else {
      this.toastrService.error('Form Tamamlanmadı','Hata');
    }
  }
}
