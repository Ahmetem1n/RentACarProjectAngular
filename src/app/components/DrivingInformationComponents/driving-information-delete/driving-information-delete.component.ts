import { DrivingInformation } from './../../../models/drivingInformation';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DrivingInformationService } from './../../../services/driving-information.service';

@Component({
  selector: 'app-driving-information-delete',
  templateUrl: './driving-information-delete.component.html',
  styleUrls: ['./driving-information-delete.component.css'],
})
export class DrivingInformationDeleteComponent implements OnInit {
  drivingInformationDeleteForm : FormGroup;
  drivingInformation : DrivingInformation
  constructor(
    private formBuilder: FormBuilder,
    private drivingInformationService: DrivingInformationService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createDrivingInformationDeleteForm();
  }

  createDrivingInformationDeleteForm() {
    this.drivingInformationDeleteForm = this.formBuilder.group({
      drivingId: [this.drivingInformation.drivingId, Validators.required],
      licenceNumber: [this.drivingInformation.licenceNumber, Validators.required],
      expiryDate: [this.drivingInformation.expiryDate, Validators.required],
      licenceProvince: [this.drivingInformation.licenceProvince, Validators.required],
      bloodGroup: [this.drivingInformation.bloodGroup, Validators.required],
    });
  }

  delete() {
    if (this.drivingInformationDeleteForm.valid) {
      let drivingInformationModel = Object.assign(
        {},
        this.drivingInformationDeleteForm.value
      );
      this.drivingInformationService
        .deleteDrivingInformation(drivingInformationModel)
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
