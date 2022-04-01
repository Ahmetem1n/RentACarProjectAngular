import { IdentityInformation } from './../../../models/identityInformation';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IdentityInformationService } from './../../../services/identity-information.service';

@Component({
  selector: 'app-identity-information-delete',
  templateUrl: './identity-information-delete.component.html',
  styleUrls: ['./identity-information-delete.component.css'],
})
export class IdentityInformationDeleteComponent implements OnInit {
  identityInformationDeleteForm: FormGroup;
  identityInformation:IdentityInformation
  constructor(
    private formBuilder: FormBuilder,
    private identityInformationService: IdentityInformationService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createIdentityInformationDeleteForm();
  }

  createIdentityInformationDeleteForm() {
    this.identityInformationDeleteForm = this.formBuilder.group({
      identityId: [this.identityInformation.identityId, Validators.required],
      serialNumber: [this.identityInformation.serialNumber, Validators.required],
      fatherName: [this.identityInformation.fatherName, Validators.required],
      motherName: [this.identityInformation.motherName, Validators.required],
      birthPlace: [this.identityInformation.birthPlace, Validators.required],
      birthYear: [this.identityInformation.birthYear, Validators.required],
      maritalStatus: [this.identityInformation.maritalStatus, Validators.required],
      gender: [this.identityInformation.gender, Validators.required],
      validUntil: [this.identityInformation.validUntil, Validators.required],
    });
  }

  delete() {
    if (this.identityInformationDeleteForm.valid) {
      let identityInformationModel = Object.assign(
        {},
        this.identityInformationDeleteForm.value
      );
      this.identityInformationService
        .deleteIdentityInformation(identityInformationModel)
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
