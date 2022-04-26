import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdentityInformation } from '../../../models/identityInformation';
import { IdentityInformationService } from '../../../services/identity-information.service';

@Component({
  selector: 'app-identity-informations',
  templateUrl: './identity-informations.component.html',
  styleUrls: ['./identity-informations.component.css'],
})
export class IdentityInformationsComponent implements OnInit {
  identityInformations: IdentityInformation[] = [];
  identityInformationAddForm: FormGroup;

  genders = [{ gender: 'Erkek' }, { gender: 'Kadın' }, { gender: 'Diğer' }];
  maritalStatuses = [
    { maritalStatus: 'Evli' },
    { maritalStatus: 'Bekar' },
    { maritalStatus: 'Diğer' },
  ];

  identityInformationUpdateAndDeleteForm: FormGroup;
  identityInformation: IdentityInformation = {
    identityId: 0,
    serialNumber: '',
    fatherName: '',
    motherName: '',
    birthPlace: '',
    birthYear: 0,
    maritalStatus: '',
    gender: '',
    validUntil: undefined,
  };

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private identityInformationService: IdentityInformationService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getIdentityInformations();
    this.createIdentityInformationAddForm();
    this.createIdentityInformationUpdateAndDeleteForm();
  }

  getIdentityInformations() {
    this.identityInformationService
      .getIdentityInformations()
      .subscribe((response) => {
        this.identityInformations = response.data;
        this.dataLoaded = true;
      });
  }

  createIdentityInformationDetail(identityInformation: IdentityInformation) {
    console.log(identityInformation);
    this.identityInformationService
      .detailIdentityInformation(identityInformation.identityId)
      .subscribe((response) => {
        this.identityInformation = response.data;
        this.createIdentityInformationUpdateAndDeleteForm();
      });
  }

  createIdentityInformationUpdateAndDeleteForm() {
    this.identityInformationUpdateAndDeleteForm = this.formBuilder.group({
      identityId: [this.identityInformation.identityId, Validators.required],
      serialNumber: [
        this.identityInformation.serialNumber,
        Validators.required
      ],
      fatherName: [this.identityInformation.fatherName, Validators.required],
      motherName: [this.identityInformation.motherName, Validators.required],
      birthPlace: [this.identityInformation.birthPlace, Validators.required],
      birthYear: [this.identityInformation.birthYear, Validators.required],
      maritalStatus: [
        this.identityInformation.maritalStatus,
        Validators.required,
      ],
      gender: [this.identityInformation.gender, Validators.required],
      validUntil: [this.identityInformation.validUntil, Validators.required],
    });
  }

  createIdentityInformationAddForm() {
    this.identityInformationAddForm = this.formBuilder.group({
      serialNumber: ['', Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      birthPlace: ['', Validators.required],
      birthYear: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      gender: ['', Validators.required],
      validUntil: ['', Validators.required],
    });
  }

  add() {
    if (this.identityInformationAddForm.valid) {
      let identityInformationModel = Object.assign(
        {},
        this.identityInformationAddForm.value
      );
      this.identityInformationService
        .addIdentityInformation(identityInformationModel)
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
    if (this.identityInformationUpdateAndDeleteForm.valid) {
      let identityInformationModel = Object.assign(
        {},
        this.identityInformationUpdateAndDeleteForm.value
      );
      this.identityInformationService
        .deleteIdentityInformation(identityInformationModel)
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
    if (this.identityInformationUpdateAndDeleteForm.valid) {
      let identityInformationModel = Object.assign(
        {},
        this.identityInformationUpdateAndDeleteForm.value
      );
      this.identityInformationService
        .updateIdentityInformation(identityInformationModel)
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
