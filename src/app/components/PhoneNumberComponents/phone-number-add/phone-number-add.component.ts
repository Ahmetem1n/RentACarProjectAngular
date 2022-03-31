import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PhoneNumberService } from './../../../services/phone-number.service';

@Component({
  selector: 'app-phone-number-add',
  templateUrl: './phone-number-add.component.html',
  styleUrls: ['./phone-number-add.component.css'],
})
export class PhoneNumberAddComponent implements OnInit {
  phoneNumberAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private phoneNumberService: PhoneNumberService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createPhoneNumberAddForm();
  }

  createPhoneNumberAddForm() {
    this.phoneNumberAddForm = this.formBuilder.group({
      userId: ['', Validators.required],
      phoneNo: ['', Validators.required],
    });
  }

  add() {
    if (this.phoneNumberAddForm.valid) {
      let phoneNumberModel = Object.assign({}, this.phoneNumberAddForm.value);
      this.phoneNumberService.addPhoneNumber(phoneNumberModel).subscribe(
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
