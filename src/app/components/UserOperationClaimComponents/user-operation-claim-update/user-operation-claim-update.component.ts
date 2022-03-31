import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserOperationClaimService } from './../../../services/user-operation-claim.service';

@Component({
  selector: 'app-user-operation-claim-update',
  templateUrl: './user-operation-claim-update.component.html',
  styleUrls: ['./user-operation-claim-update.component.css'],
})
export class UserOperationClaimUpdateComponent implements OnInit {
  userOperationClaimUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userOperationClaimService: UserOperationClaimService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createUserOperationClaimUpdateForm();
  }

  createUserOperationClaimUpdateForm() {
    this.userOperationClaimUpdateForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  update() {
    if (this.userOperationClaimUpdateForm.valid) {
      let userOperationClaimModel = Object.assign({}, this.userOperationClaimUpdateForm.value);
      this.userOperationClaimService.updateUserOperationClaim(userOperationClaimModel).subscribe(
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
