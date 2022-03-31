import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from './../../../services/customer.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css'],
})
export class CustomerUpdateComponent implements OnInit {
  customerUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createCustomerUpdateForm();
  }

  createCustomerUpdateForm() {
    this.customerUpdateForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  update() {
    if (this.customerUpdateForm.valid) {
      let customerModel = Object.assign({}, this.customerUpdateForm.value);
      this.customerService.updateCustomer(customerModel).subscribe(
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
