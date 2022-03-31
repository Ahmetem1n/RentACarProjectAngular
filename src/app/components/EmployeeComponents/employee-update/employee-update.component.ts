import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from './../../../services/employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css'],
})
export class EmployeeUpdateComponent implements OnInit {
  employeeUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createEmployeeUpdateForm();
  }

  createEmployeeUpdateForm() {
    this.employeeUpdateForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  update() {
    if (this.employeeUpdateForm.valid) {
      let employeeModel = Object.assign({}, this.employeeUpdateForm.value);
      this.employeeService.updateEmployee(employeeModel).subscribe(
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
