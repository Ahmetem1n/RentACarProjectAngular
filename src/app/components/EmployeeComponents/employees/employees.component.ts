import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../../models/employee';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  employeeAddForm: FormGroup;

  employeeUpdateAndDeleteForm: FormGroup;
  employee: Employee = { employeeId: 0, userId: 0 };

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getEmployees();
    this.createEmployeeAddForm();
    this.createEmployeeUpdateAndDeleteForm();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe((response) => {
      this.employees = response.data;
      this.dataLoaded = true;
    });
  }

  createEmployeeDetail(employee: Employee) {
    console.log(employee);
    this.employeeService
      .detailEmployee(employee.employeeId)
      .subscribe((response) => {
        this.employee = response.data;
        this.createEmployeeUpdateAndDeleteForm();
      });
  }

  createEmployeeUpdateAndDeleteForm() {
    this.employeeUpdateAndDeleteForm = this.formBuilder.group({
      employeeId: [this.employee.employeeId, Validators.required],
      userId: [this.employee.userId, Validators.required],
    });
  }

  createEmployeeAddForm() {
    this.employeeAddForm = this.formBuilder.group({
      userId: ['', Validators.required],
    });
  }

  add() {
    if (this.employeeAddForm.valid) {
      let employeeModel = Object.assign({}, this.employeeAddForm.value);
      this.employeeService.addEmployee(employeeModel).subscribe(
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
    if (this.employeeUpdateAndDeleteForm.valid) {
      let employeeModel = Object.assign(
        {},
        this.employeeUpdateAndDeleteForm.value
      );
      this.employeeService.deleteEmployee(employeeModel).subscribe(
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
    if (this.employeeUpdateAndDeleteForm.valid) {
      let employeeModel = Object.assign(
        {},
        this.employeeUpdateAndDeleteForm.value
      );
      this.employeeService.updateEmployee(employeeModel).subscribe(
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
