import { PhoneNumber } from './../../../models/phoneNumber';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PhoneNumberService } from './../../../services/phone-number.service';

@Component({
  selector: 'app-phone-number-delete',
  templateUrl: './phone-number-delete.component.html',
  styleUrls: ['./phone-number-delete.component.css'],
})
export class PhoneNumberDeleteComponent implements OnInit {
  phoneNumberDeleteForm: FormGroup;
  phoneNumber: PhoneNumber;
  constructor(
    private formBuilder: FormBuilder,
    private phoneNumberService: PhoneNumberService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createPhoneNumberDeleteForm();
  }

  createPhoneNumberDeleteForm() {
    this.phoneNumberDeleteForm = this.formBuilder.group({
      phoneId: [this.phoneNumber.phoneId, Validators.required],
      userId: [this.phoneNumber.userId, Validators.required],
      phoneNo: [this.phoneNumber.userId, Validators.required],
    });
  }

  delete() {
    if (this.phoneNumberDeleteForm.valid) {
      let phoneNumberModel = Object.assign(
        {},
        this.phoneNumberDeleteForm.value
      );
      this.phoneNumberService.deletePhoneNumber(phoneNumberModel).subscribe(
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
