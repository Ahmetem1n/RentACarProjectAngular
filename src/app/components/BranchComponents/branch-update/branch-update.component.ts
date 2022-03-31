import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BranchService } from './../../../services/branch.service';

@Component({
  selector: 'app-branch-update',
  templateUrl: './branch-update.component.html',
  styleUrls: ['./branch-update.component.css'],
})
export class BranchUpdateComponent implements OnInit {
  branchUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private branchService: BranchService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createBranchUpdateForm();
  }

  createBranchUpdateForm() {
    this.branchUpdateForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  update() {
    if (this.branchUpdateForm.valid) {
      let branchModel = Object.assign({}, this.branchUpdateForm.value);
      this.branchService.updateBranch(branchModel).subscribe(
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
