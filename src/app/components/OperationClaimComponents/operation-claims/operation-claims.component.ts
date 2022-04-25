import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperationClaim } from '../../../models/operationClaim';
import { OperationClaimService } from '../../../services/operation-claim.service';

@Component({
  selector: 'app-operation-claims',
  templateUrl: './operation-claims.component.html',
  styleUrls: ['./operation-claims.component.css'],
})
export class OperationClaimsComponent implements OnInit {
  operationClaims: OperationClaim[] = [];
  operationClaimAddForm: FormGroup;

  operationClaimUpdateAndDeleteForm: FormGroup;
  operationClaim: OperationClaim = { claimId: 0, claimName: '' };

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private operationClaimService: OperationClaimService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getOperationClaims();
    this.createOperationClaimAddForm();
    this.createOperationClaimUpdateAndDeleteForm();
  }

  getOperationClaims() {
    this.operationClaimService.getOperationClaims().subscribe((response) => {
      this.operationClaims = response.data;
      this.dataLoaded = true;
    });
  }

  createOperationClaimDetail(operationClaim: OperationClaim) {
    console.log(operationClaim);
    this.operationClaimService
      .detailOperationClaim(operationClaim.claimId)
      .subscribe((response) => {
        this.operationClaim = response.data;
        this.createOperationClaimUpdateAndDeleteForm();
      });
  }

  createOperationClaimUpdateAndDeleteForm() {
    this.operationClaimUpdateAndDeleteForm = this.formBuilder.group({
      claimId: [this.operationClaim.claimId, Validators.required],
      claimName: [this.operationClaim.claimName, Validators.required],
    });
  }

  createOperationClaimAddForm() {
    this.operationClaimAddForm = this.formBuilder.group({
      claimName: ['', Validators.required],
    });
  }

  add() {
    if (this.operationClaimAddForm.valid) {
      let operationClaimModel = Object.assign(
        {},
        this.operationClaimAddForm.value
      );
      this.operationClaimService
        .addOperationClaim(operationClaimModel)
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
    if (this.operationClaimUpdateAndDeleteForm.valid) {
      let operationClaimModel = Object.assign(
        {},
        this.operationClaimUpdateAndDeleteForm.value
      );
      this.operationClaimService
        .deleteOperationClaim(operationClaimModel)
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
    if (this.operationClaimUpdateAndDeleteForm.valid) {
      let operationClaimModel = Object.assign(
        {},
        this.operationClaimUpdateAndDeleteForm.value
      );
      this.operationClaimService
        .updateOperationClaim(operationClaimModel)
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
