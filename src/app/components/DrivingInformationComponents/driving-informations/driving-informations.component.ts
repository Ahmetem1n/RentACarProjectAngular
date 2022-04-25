import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrivingInformation } from '../../../models/drivingInformation';
import { DrivingInformationService } from '../../../services/driving-information.service';

@Component({
  selector: 'app-driving-informations',
  templateUrl: './driving-informations.component.html',
  styleUrls: ['./driving-informations.component.css'],
})
export class DrivingInformationsComponent implements OnInit {
  drivingInformations: DrivingInformation[] = [];
  drivingInformationAddForm: FormGroup;

  drivingInformationUpdateAndDeleteForm: FormGroup;
  drivingInformation: DrivingInformation = { drivingId: 0, licenceNumber: '',expiryDate:undefined,licenceProvince:"",bloodGroup:"" };

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private drivingInformationService: DrivingInformationService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getDrivingInformations();
    this.createDrivingInformationAddForm();
    this.createDrivingInformationUpdateAndDeleteForm();
  }

  getDrivingInformations() {
    this.drivingInformationService.getDrivingInformations().subscribe((response) => {
      this.drivingInformations = response.data;
      this.dataLoaded = true;
    });
  }

  createDrivingInformationDetail(drivingInformation: DrivingInformation) {
    console.log(drivingInformation);
    this.drivingInformationService.detailDrivingInformation(drivingInformation.drivingId).subscribe((response) => {
      this.drivingInformation = response.data;
      this.createDrivingInformationUpdateAndDeleteForm();
    });
  }

  createDrivingInformationUpdateAndDeleteForm() {
    this.drivingInformationUpdateAndDeleteForm = this.formBuilder.group({
      drivingId: [this.drivingInformation.drivingId, Validators.required],
      licenceNumber: [this.drivingInformation.licenceNumber, Validators.required],
      expiryDate: [this.drivingInformation.expiryDate, Validators.required],
      licenceProvince: [this.drivingInformation.licenceProvince, Validators.required],
      bloodGroup: [this.drivingInformation.bloodGroup, Validators.required],
    });
  }

  createDrivingInformationAddForm() {
    this.drivingInformationAddForm = this.formBuilder.group({
      licenceNumber: ["", Validators.required],
      expiryDate: ["", Validators.required],
      licenceProvince: ["", Validators.required],
      bloodGroup: ["", Validators.required],
    });
  }

  add() {
    if (this.drivingInformationAddForm.valid) {
      let drivingInformationModel = Object.assign({}, this.drivingInformationAddForm.value);
      this.drivingInformationService.addDrivingInformation(drivingInformationModel).subscribe(
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
    if (this.drivingInformationUpdateAndDeleteForm.valid) {
      let drivingInformationModel = Object.assign({}, this.drivingInformationUpdateAndDeleteForm.value);
      this.drivingInformationService.deleteDrivingInformation(drivingInformationModel).subscribe(
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
    if (this.drivingInformationUpdateAndDeleteForm.valid) {
      let drivingInformationModel = Object.assign({}, this.drivingInformationUpdateAndDeleteForm.value);
      this.drivingInformationService.updateDrivingInformation(drivingInformationModel).subscribe(
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
