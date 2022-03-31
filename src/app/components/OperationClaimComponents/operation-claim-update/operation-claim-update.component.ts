import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OperationClaimService } from './../../../services/operation-claim.service';

@Component({
  selector: 'app-operation-claim-update',
  templateUrl: './operation-claim-update.component.html',
  styleUrls: ['./operation-claim-update.component.css'],
})
export class OperationClaimUpdateComponent implements OnInit {
  operationClaimUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private operationClaimService: OperationClaimService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createOperationClaimUpdateForm();
  }

  createOperationClaimUpdateForm() {
    this.operationClaimUpdateForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  update() {
    if (this.operationClaimUpdateForm.valid) {
      let operationClaimModel = Object.assign({}, this.operationClaimUpdateForm.value);
      this.operationClaimService.updateOperationClaim(operationClaimModel).subscribe(
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
