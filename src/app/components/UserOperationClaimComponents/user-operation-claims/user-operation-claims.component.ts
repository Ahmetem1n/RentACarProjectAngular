import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserOperationClaim } from '../../../models/userOperationClaim';
import { UserOperationClaimService } from '../../../services/user-operation-claim.service';

@Component({
  selector: 'app-user-operation-claims',
  templateUrl: './user-operation-claims.component.html',
  styleUrls: ['./user-operation-claims.component.css'],
})
export class UserOperationClaimsComponent implements OnInit {
  userOperationClaims: UserOperationClaim[] = [];
  userOperationClaimAddForm: FormGroup;

  userOperationClaimUpdateAndDeleteForm: FormGroup;
  userOperationClaim: UserOperationClaim = {
    detailId: 0,
    userId: 0,
    claimId: 0,
  };

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private userOperationClaimService: UserOperationClaimService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUserOperationClaims();
    this.createUserOperationClaimAddForm();
    this.createUserOperationClaimUpdateAndDeleteForm();
  }

  getUserOperationClaims() {
    this.userOperationClaimService
      .getUserOperationClaims()
      .subscribe((response) => {
        this.userOperationClaims = response.data;
        this.dataLoaded = true;
      });
  }

  createUserOperationClaimDetail(userOperationClaim: UserOperationClaim) {
    console.log(userOperationClaim);
    this.userOperationClaimService
      .detailUserOperationClaim(userOperationClaim.detailId)
      .subscribe((response) => {
        this.userOperationClaim = response.data;
        this.createUserOperationClaimUpdateAndDeleteForm();
      });
  }

  createUserOperationClaimUpdateAndDeleteForm() {
    this.userOperationClaimUpdateAndDeleteForm = this.formBuilder.group({
      detailId: [this.userOperationClaim.detailId, Validators.required],
      userId: [this.userOperationClaim.userId, Validators.required],
      claimId: [this.userOperationClaim.claimId, Validators.required],
    });
  }

  createUserOperationClaimAddForm() {
    this.userOperationClaimAddForm = this.formBuilder.group({
      userId: ['', Validators.required],
      claimId: ['', Validators.required],
    });
  }

  add() {
    if (this.userOperationClaimAddForm.valid) {
      let userOperationClaimModel = Object.assign(
        {},
        this.userOperationClaimAddForm.value
      );
      this.userOperationClaimService
        .addUserOperationClaim(userOperationClaimModel)
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
    if (this.userOperationClaimUpdateAndDeleteForm.valid) {
      let userOperationClaimModel = Object.assign(
        {},
        this.userOperationClaimUpdateAndDeleteForm.value
      );
      this.userOperationClaimService
        .deleteUserOperationClaim(userOperationClaimModel)
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
    if (this.userOperationClaimUpdateAndDeleteForm.valid) {
      let userOperationClaimModel = Object.assign(
        {},
        this.userOperationClaimUpdateAndDeleteForm.value
      );
      this.userOperationClaimService
        .updateUserOperationClaim(userOperationClaimModel)
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
