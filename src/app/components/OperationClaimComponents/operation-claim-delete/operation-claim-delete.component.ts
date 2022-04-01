import { OperationClaim } from './../../../models/operationClaim';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OperationClaimService } from './../../../services/operation-claim.service';

@Component({
  selector: 'app-operation-claim-delete',
  templateUrl: './operation-claim-delete.component.html',
  styleUrls: ['./operation-claim-delete.component.css'],
})
export class OperationClaimDeleteComponent implements OnInit {
  operationClaimDeleteForm: FormGroup;
  operationClaim: OperationClaim;
  constructor(
    private formBuilder: FormBuilder,
    private operationClaimService: OperationClaimService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createOperationClaimDeleteForm();
  }

  createOperationClaimDeleteForm() {
    this.operationClaimDeleteForm = this.formBuilder.group({
      claimId: [this.operationClaim.claimId, Validators.required],
      claimName: [this.operationClaim.claimName, Validators.required],
    });
  }

  delete() {
    if (this.operationClaimDeleteForm.valid) {
      let operationClaimModel = Object.assign(
        {},
        this.operationClaimDeleteForm.value
      );
      this.operationClaimService
        .deleteOperationClaim(operationClaimModel)
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
