import { AuthService } from 'src/app/services/auth.service';
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
  
  isAdmin = false;
  isEmployee = false;
  isCustomer = false;

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private authService: AuthService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAdmins();
    this.createAdminAddForm();
    this.createAdminUpdateAndDeleteForm();
    this.getRole();
  }

  getRole() {
    var result = this.authService.getRole();
    if (result == 'Yönetici') {
      this.isAdmin = true;
      this.isEmployee = false;
      this.isCustomer = false;
    } else if (result == 'Çalışan') {
      this.isAdmin = false;
      this.isEmployee = true;
      this.isCustomer = false;
    } else if (result == 'Müşteri') {
      this.isAdmin = false;
      this.isEmployee = false;
      this.isCustomer = true;
    }
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
          this.toastrService.success(response.message, 'Başarılı');
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

  delete() {
    if (this.adminUpdateAndDeleteForm.valid) {
      let adminModel = Object.assign({}, this.adminUpdateAndDeleteForm.value);
      this.adminService.deleteAdmin(adminModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
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

  update() {
    if (this.adminUpdateAndDeleteForm.valid) {
      let adminModel = Object.assign({}, this.adminUpdateAndDeleteForm.value);
      this.adminService.updateAdmin(adminModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
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
