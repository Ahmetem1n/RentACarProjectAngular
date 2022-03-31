import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from './../../../services/employee.service';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css'],
})
export class EmployeeDeleteComponent implements OnInit {
  employeeDeleteForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createEmployeeDeleteForm();
  }

  createEmployeeDeleteForm() {
    this.employeeDeleteForm = this.formBuilder.group({
      employeeId: ['', Validators.required],
      userId: ['', Validators.required],
    });
  }

  delete() {
    if (this.employeeDeleteForm.valid) {
      let employeeModel = Object.assign({}, this.employeeDeleteForm.value);
      this.employeeService.deleteEmployee(employeeModel).subscribe(
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
