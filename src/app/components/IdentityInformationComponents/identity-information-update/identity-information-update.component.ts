import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IdentityInformationService } from './../../../services/identity-information.service';

@Component({
  selector: 'app-identity-information-update',
  templateUrl: './identity-information-update.component.html',
  styleUrls: ['./identity-information-update.component.css'],
})
export class IdentityInformationUpdateComponent implements OnInit {
  identityInformationUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private identityInformationService: IdentityInformationService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createIdentityInformationUpdateForm();
  }

  createIdentityInformationUpdateForm() {
    this.identityInformationUpdateForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  update() {
    if (this.identityInformationUpdateForm.valid) {
      let identityInformationModel = Object.assign({}, this.identityInformationUpdateForm.value);
      this.identityInformationService.updateIdentityInformation(identityInformationModel).subscribe(
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
