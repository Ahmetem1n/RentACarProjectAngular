import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IdentityInformationService } from './../../../services/identity-information.service';

@Component({
  selector: 'app-identity-information-add',
  templateUrl: './identity-information-add.component.html',
  styleUrls: ['./identity-information-add.component.css'],
})
export class IdentityInformationAddComponent implements OnInit {
  identityInformationAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private identityInformationService: IdentityInformationService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createIdentityInformationAddForm();
  }

  createIdentityInformationAddForm() {
    this.identityInformationAddForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  add() {
    if (this.identityInformationAddForm.valid) {
      let identityInformationModel = Object.assign({}, this.identityInformationAddForm.value);
      this.identityInformationService.addIdentityInformation(identityInformationModel).subscribe(
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
