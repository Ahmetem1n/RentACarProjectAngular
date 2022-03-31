import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DrivingInformationService } from './../../../services/driving-information.service';

@Component({
  selector: 'app-driving-information-update',
  templateUrl: './driving-information-update.component.html',
  styleUrls: ['./driving-information-update.component.css'],
})
export class DrivingInformationUpdateComponent implements OnInit {
  drivingInformationUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private drivingInformationService: DrivingInformationService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createDrivingInformationUpdateForm();
  }

  createDrivingInformationUpdateForm() {
    this.drivingInformationUpdateForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  update() {
    if (this.drivingInformationUpdateForm.valid) {
      let drivingInformationModel = Object.assign({}, this.drivingInformationUpdateForm.value);
      this.drivingInformationService.updateDrivingInformation(drivingInformationModel).subscribe(
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
