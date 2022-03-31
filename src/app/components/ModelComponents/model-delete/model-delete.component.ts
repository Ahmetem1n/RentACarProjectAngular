import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ModelService } from './../../../services/model.service';

@Component({
  selector: 'app-model-delete',
  templateUrl: './model-delete.component.html',
  styleUrls: ['./model-delete.component.css'],
})
export class ModelDeleteComponent implements OnInit {
  modelDeleteForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private modelService: ModelService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createModelDeleteForm();
  }

  createModelDeleteForm() {
    this.modelDeleteForm = this.formBuilder.group({
      modelId: ['', Validators.required],
      modelName: ['', Validators.required],
    });
  }

  delete() {
    if (this.modelDeleteForm.valid) {
      let modelModel = Object.assign({}, this.modelDeleteForm.value);
      this.modelService.deleteModel(modelModel).subscribe(
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
