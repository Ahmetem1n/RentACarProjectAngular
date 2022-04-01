import { Branch } from './../../../models/branch';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BranchService } from './../../../services/branch.service';

@Component({
  selector: 'app-branch-delete',
  templateUrl: './branch-delete.component.html',
  styleUrls: ['./branch-delete.component.css'],
})
export class BranchDeleteComponent implements OnInit {
  branchDeleteForm: FormGroup;
  branch: Branch;
  constructor(
    private formBuilder: FormBuilder,
    private branchService: BranchService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createBranchDeleteForm();
  }

  createBranchDeleteForm() {
    this.branchDeleteForm = this.formBuilder.group({
      branchId: [this.branch.branchId, Validators.required],
      cityId: [this.branch.cityId, Validators.required],
      branchName: [this.branch.branchName, Validators.required],
    });
  }

  delete() {
    if (this.branchDeleteForm.valid) {
      let branchModel = Object.assign({}, this.branchDeleteForm.value);
      this.branchService.deleteBranch(branchModel).subscribe(
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
