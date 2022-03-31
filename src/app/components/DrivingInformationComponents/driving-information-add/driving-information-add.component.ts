import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DrivingInformationService } from './../../../services/driving-information.service';

@Component({
  selector: 'app-driving-information-add',
  templateUrl: './driving-information-add.component.html',
  styleUrls: ['./driving-information-add.component.css'],
})
export class DrivingInformationAddComponent implements OnInit {
  drivingInformationAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private drivingInformationService: DrivingInformationService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createDrivingInformationAddForm();
  }

  createDrivingInformationAddForm() {
    this.drivingInformationAddForm = this.formBuilder.group({
      licenceNumber: ['', Validators.required],
      expiryDate: ['', Validators.required],
      licenceProvince: ['', Validators.required],
      bloodGroup: ['', Validators.required],
    });
  }

  add() {
    if (this.drivingInformationAddForm.valid) {
      let drivingInformationModel = Object.assign(
        {},
        this.drivingInformationAddForm.value
      );
      this.drivingInformationService
        .addDrivingInformation(drivingInformationModel)
        .subscribe(
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
