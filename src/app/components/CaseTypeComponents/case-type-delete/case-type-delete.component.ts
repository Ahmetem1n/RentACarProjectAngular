import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CaseTypeService } from './../../../services/case-type.service';

@Component({
  selector: 'app-case-type-delete',
  templateUrl: './case-type-delete.component.html',
  styleUrls: ['./case-type-delete.component.css'],
})
export class CaseTypeDeleteComponent implements OnInit {
  caseTypeDeleteForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private caseTypeService: CaseTypeService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createCaseTypeDeleteForm();
  }

  createCaseTypeDeleteForm() {
    this.caseTypeDeleteForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  delete() {
    if (this.caseTypeDeleteForm.valid) {
      let caseTypeModel = Object.assign({}, this.caseTypeDeleteForm.value);
      this.caseTypeService.deleteCaseType(caseTypeModel).subscribe(
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
