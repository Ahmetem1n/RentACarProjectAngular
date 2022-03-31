import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserOperationClaimService } from './../../../services/user-operation-claim.service';

@Component({
  selector: 'app-user-operation-claim-delete',
  templateUrl: './user-operation-claim-delete.component.html',
  styleUrls: ['./user-operation-claim-delete.component.css'],
})
export class UserOperationClaimDeleteComponent implements OnInit {
  userOperationClaimDeleteForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userOperationClaimService: UserOperationClaimService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createUserOperationClaimDeleteForm();
  }

  createUserOperationClaimDeleteForm() {
    this.userOperationClaimDeleteForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  delete() {
    if (this.userOperationClaimDeleteForm.valid) {
      let userOperationClaimModel = Object.assign({}, this.userOperationClaimDeleteForm.value);
      this.userOperationClaimService.deleteUserOperationClaim(userOperationClaimModel).subscribe(
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
