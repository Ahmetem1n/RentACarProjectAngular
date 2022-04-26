import { User } from './../../../models/user';
import { UserService } from './../../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneNumber } from '../../../models/phoneNumber';
import { PhoneNumberService } from '../../../services/phone-number.service';

@Component({
  selector: 'app-phone-numbers',
  templateUrl: './phone-numbers.component.html',
  styleUrls: ['./phone-numbers.component.css'],
})
export class PhoneNumbersComponent implements OnInit {
  phoneNumbers: PhoneNumber[] = [];
  phoneNumberAddForm: FormGroup;

  phoneNumberUpdateAndDeleteForm: FormGroup;
  phoneNumber: PhoneNumber = { phoneId: 0, userId: 0, phoneNo: '' };

  users: User[] = [];

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private phoneNumberService: PhoneNumberService,
    private userService: UserService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPhoneNumbers();
    this.getUsers();
    this.createPhoneNumberAddForm();
    this.createPhoneNumberUpdateAndDeleteForm();
  }

  getPhoneNumbers() {
    this.phoneNumberService.getPhoneNumbers().subscribe((response) => {
      this.phoneNumbers = response.data;
      this.dataLoaded = true;
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response.data;
    });
  }

  getUserNationalityId(userId:number) {
    return this.users.find(u=>u.userId==userId).nationalityId
   }

  createPhoneNumberDetail(phoneNumber: PhoneNumber) {
    console.log(phoneNumber);
    this.phoneNumberService
      .detailPhoneNumber(phoneNumber.phoneId)
      .subscribe((response) => {
        this.phoneNumber = response.data;
        this.createPhoneNumberUpdateAndDeleteForm();
      });
  }

  createPhoneNumberUpdateAndDeleteForm() {
    this.phoneNumberUpdateAndDeleteForm = this.formBuilder.group({
      phoneId: [this.phoneNumber.phoneId, Validators.required],
      userId: [this.phoneNumber.userId, Validators.required],
      phoneNo: [this.phoneNumber.phoneNo, Validators.required],
    });
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
    if (this.phoneNumberUpdateAndDeleteForm.valid) {
      let phoneNumberModel = Object.assign(
        {},
        this.phoneNumberUpdateAndDeleteForm.value
      );
      this.phoneNumberService.deletePhoneNumber(phoneNumberModel).subscribe(
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
    if (this.phoneNumberUpdateAndDeleteForm.valid) {
      let phoneNumberModel = Object.assign(
        {},
        this.phoneNumberUpdateAndDeleteForm.value
      );
      this.phoneNumberService.updatePhoneNumber(phoneNumberModel).subscribe(
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
