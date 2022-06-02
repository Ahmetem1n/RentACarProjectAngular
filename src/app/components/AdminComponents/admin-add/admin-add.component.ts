import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css'],
})
export class AdminAddComponent implements OnInit {
  adminAddForm: FormGroup;
  admin: Admin;
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    //this.updateDeneme();
    this.createAdminAddForm();
  }

  updateDeneme() {
    this.adminService.detailAdmin(6).subscribe((response) => {
      this.admin = response.data;
      console.log(this.admin);
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
