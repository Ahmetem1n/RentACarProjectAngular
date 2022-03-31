import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CaseTypeService } from './../../../services/case-type.service';

@Component({
  selector: 'app-case-type-add',
  templateUrl: './case-type-add.component.html',
  styleUrls: ['./case-type-add.component.css'],
})
export class CaseTypeAddComponent implements OnInit {
  caseTypeAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private caseTypeService: CaseTypeService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createCaseTypeAddForm();
  }

  createCaseTypeAddForm() {
    this.caseTypeAddForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  add() {
    if (this.caseTypeAddForm.valid) {
      let caseTypeModel = Object.assign({}, this.caseTypeAddForm.value);
      this.caseTypeService.addCaseType(caseTypeModel).subscribe(
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
