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
      identityId: ['', Validators.required],
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
