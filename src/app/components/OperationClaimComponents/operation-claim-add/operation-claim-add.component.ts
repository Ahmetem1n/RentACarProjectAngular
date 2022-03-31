import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OperationClaimService } from './../../../services/operation-claim.service';

@Component({
  selector: 'app-operation-claim-add',
  templateUrl: './operation-claim-add.component.html',
  styleUrls: ['./operation-claim-add.component.css'],
})
export class OperationClaimAddComponent implements OnInit {
  operationClaimAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private operationClaimService: OperationClaimService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createOperationClaimAddForm();
  }

  createOperationClaimAddForm() {
    this.operationClaimAddForm = this.formBuilder.group({
      claimName: ['', Validators.required],
    });
  }

  add() {
    if (this.operationClaimAddForm.valid) {
      let operationClaimModel = Object.assign({}, this.operationClaimAddForm.value);
      this.operationClaimService.addOperationClaim(operationClaimModel).subscribe(
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
