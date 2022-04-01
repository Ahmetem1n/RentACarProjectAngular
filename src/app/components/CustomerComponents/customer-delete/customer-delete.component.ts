import { Customer } from './../../../models/customer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from './../../../services/customer.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css'],
})
export class CustomerDeleteComponent implements OnInit {
  customerDeleteForm: FormGroup;
  customer: Customer;
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createCustomerDeleteForm();
  }

  createCustomerDeleteForm() {
    this.customerDeleteForm = this.formBuilder.group({
      customerId: [this.customer.customerId, Validators.required],
      userId: [this.customer.userId, Validators.required],
      identityId: [this.customer.identityId, Validators.required],
      drivingId: [this.customer.drivingId, Validators.required],
      address: [this.customer.address, Validators.required],
    });
  }

  delete() {
    if (this.customerDeleteForm.valid) {
      let customerModel = Object.assign({}, this.customerDeleteForm.value);
      this.customerService.deleteCustomer(customerModel).subscribe(
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
