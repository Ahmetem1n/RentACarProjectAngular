import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { City } from 'src/app/models/city';
import { DrivingInformation } from 'src/app/models/drivingInformation';
import { CityService } from 'src/app/services/city.service';
import { DrivingInformationService } from 'src/app/services/driving-information.service';

@Component({
  selector: 'app-driving-informations',
  templateUrl: './driving-informations.component.html',
  styleUrls: ['./driving-informations.component.css'],
})
export class DrivingInformationsComponent implements OnInit {
  drivingInformations: DrivingInformation[] = [];
  drivingInformationAddForm: FormGroup;

  drivingInformationUpdateAndDeleteForm: FormGroup;
  drivingInformation: DrivingInformation = {
    drivingId: 0,
    licenceNumber: '',
    expiryDate: undefined,
    bloodGroup: '',
    licenceProvince: '',
  };

  cities: City[] = [];
  bloodGroups = [
    { bloodGroup: 'A Rh+' },
    { bloodGroup: 'A Rh-' },
    { bloodGroup: 'B Rh+' },
    { bloodGroup: 'B Rh-' },
    { bloodGroup: 'AB Rh+' },
    { bloodGroup: 'AB Rh-' },
    { bloodGroup: '0 Rh+' },
    { bloodGroup: '0 Rh-' },
  ];

  drivingInformationFilter = '';

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private drivingInformationService: DrivingInformationService,
    private cityService: CityService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getDrivingInformations();
    this.getCities();
    this.createDrivingInformationAddForm();
    this.createDrivingInformationUpdateAndDeleteForm();
  }

  getDrivingInformations() {
    this.drivingInformationService
      .getDrivingInformations()
      .subscribe((response) => {
        this.drivingInformations = response.data;
        this.dataLoaded = true;
      });
  }

  getCities() {
    this.cityService.getCities().subscribe((response) => {
      this.cities = response.data;
    });
  }

  getCityName(cityId: number) {
    return this.cities.find((c) => c.cityId == cityId).cityName;
  }

  createDrivingInformationDetail(drivingInformation: DrivingInformation) {
    console.log(drivingInformation);
    this.drivingInformationService
      .detailDrivingInformation(drivingInformation.drivingId)
      .subscribe((response) => {
        this.drivingInformation = response.data;
        this.createDrivingInformationUpdateAndDeleteForm();
      });
  }

  createDrivingInformationUpdateAndDeleteForm() {
    this.drivingInformationUpdateAndDeleteForm = this.formBuilder.group({
      drivingId: [this.drivingInformation.drivingId, Validators.required],
      licenceProvince: [
        this.drivingInformation.licenceProvince,
        Validators.required,
      ],
      licenceNumber: [
        this.drivingInformation.licenceNumber,
        Validators.required,
      ],
      expiryDate: [this.drivingInformation.expiryDate, Validators.required],
      bloodGroup: [this.drivingInformation.bloodGroup, Validators.required],
    });
  }

  createDrivingInformationAddForm() {
    this.drivingInformationAddForm = this.formBuilder.group({
      licenceProvince: ['', Validators.required],
      licenceNumber: ['', Validators.required],
      expiryDate: ['', Validators.required],
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
      let drivingInformationModel = Object.assign(
        {},
        this.drivingInformationUpdateAndDeleteForm.value
      );
      this.drivingInformationService
        .deleteDrivingInformation(drivingInformationModel)
        .subscribe(
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
      let drivingInformationModel = Object.assign(
        {},
        this.drivingInformationUpdateAndDeleteForm.value
      );
      this.drivingInformationService
        .updateDrivingInformation(drivingInformationModel)
        .subscribe(
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
