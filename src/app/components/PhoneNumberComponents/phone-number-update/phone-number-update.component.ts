import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PhoneNumberService } from './../../../services/phone-number.service';

@Component({
  selector: 'app-phone-number-update',
  templateUrl: './phone-number-update.component.html',
  styleUrls: ['./phone-number-update.component.css'],
})
export class PhoneNumberUpdateComponent implements OnInit {
  phoneNumberUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private phoneNumberService: PhoneNumberService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createPhoneNumberUpdateForm();
  }

  createPhoneNumberUpdateForm() {
    this.phoneNumberUpdateForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  update() {
    if (this.phoneNumberUpdateForm.valid) {
      let phoneNumberModel = Object.assign({}, this.phoneNumberUpdateForm.value);
      this.phoneNumberService.updatePhoneNumber(phoneNumberModel).subscribe(
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
