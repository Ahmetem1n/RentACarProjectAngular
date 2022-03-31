import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CaseTypeService } from './../../../services/case-type.service';

@Component({
  selector: 'app-case-type-update',
  templateUrl: './case-type-update.component.html',
  styleUrls: ['./case-type-update.component.css'],
})
export class CaseTypeUpdateComponent implements OnInit {
  caseTypeUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private caseTypeService: CaseTypeService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createCaseTypeUpdateForm();
  }

  createCaseTypeUpdateForm() {
    this.caseTypeUpdateForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  update() {
    if (this.caseTypeUpdateForm.valid) {
      let caseTypeModel = Object.assign({}, this.caseTypeUpdateForm.value);
      this.caseTypeService.updateCaseType(caseTypeModel).subscribe(
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
