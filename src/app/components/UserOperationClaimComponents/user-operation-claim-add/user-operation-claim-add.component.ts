import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserOperationClaimService } from './../../../services/user-operation-claim.service';

@Component({
  selector: 'app-user-operation-claim-add',
  templateUrl: './user-operation-claim-add.component.html',
  styleUrls: ['./user-operation-claim-add.component.css'],
})
export class UserOperationClaimAddComponent implements OnInit {
  userOperationClaimAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userOperationClaimService: UserOperationClaimService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createUserOperationClaimAddForm();
  }

  createUserOperationClaimAddForm() {
    this.userOperationClaimAddForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  add() {
    if (this.userOperationClaimAddForm.valid) {
      let userOperationClaimModel = Object.assign({}, this.userOperationClaimAddForm.value);
      this.userOperationClaimService.addUserOperationClaim(userOperationClaimModel).subscribe(
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
