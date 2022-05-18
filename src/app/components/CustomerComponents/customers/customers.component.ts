import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  customerAddForm: FormGroup;

  customerUpdateAndDeleteForm: FormGroup;
  customer: Customer = {
    customerId: 0,
    userId: 0,
    identityId: 0,
    drivingId: 0,
    address: '',
  };

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCustomers();
    this.createCustomerAddForm();
    this.createCustomerUpdateAndDeleteForm();
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response.data;
      this.dataLoaded = true;
    });
  }

  createCustomerDetail(customer: Customer) {
    console.log(customer);
    this.customerService
      .detailCustomer(customer.customerId)
      .subscribe((response) => {
        this.customer = response.data;
        this.createCustomerUpdateAndDeleteForm();
      });
  }

  createCustomerUpdateAndDeleteForm() {
    this.customerUpdateAndDeleteForm = this.formBuilder.group({
      customerId: [this.customer.customerId, Validators.required],
      userId: [this.customer.userId, Validators.required],
      identityId: [this.customer.identityId, Validators.required],
      drivingId: [this.customer.drivingId, Validators.required],
      address: [this.customer.address, Validators.required],
    });
  }

  createCustomerAddForm() {
    this.customerAddForm = this.formBuilder.group({
      userId: ['', Validators.required],
      identityId: ['', Validators.required],
      drivingId: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  add() {
    if (this.customerAddForm.valid) {
      let customerModel = Object.assign({}, this.customerAddForm.value);
      this.customerService.addCustomer(customerModel).subscribe(
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
    if (this.customerUpdateAndDeleteForm.valid) {
      let customerModel = Object.assign(
        {},
        this.customerUpdateAndDeleteForm.value
      );
      this.customerService.deleteCustomer(customerModel).subscribe(
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
    if (this.customerUpdateAndDeleteForm.valid) {
      let customerModel = Object.assign(
        {},
        this.customerUpdateAndDeleteForm.value
      );
      this.customerService.updateCustomer(customerModel).subscribe(
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
