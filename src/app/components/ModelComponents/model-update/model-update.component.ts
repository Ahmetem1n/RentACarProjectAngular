import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ModelService } from './../../../services/model.service';

@Component({
  selector: 'app-model-update',
  templateUrl: './model-update.component.html',
  styleUrls: ['./model-update.component.css'],
})
export class ModelUpdateComponent implements OnInit {
  modelUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private modelService: ModelService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createModelUpdateForm();
  }

  createModelUpdateForm() {
    this.modelUpdateForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  update() {
    if (this.modelUpdateForm.valid) {
      let modelModel = Object.assign({}, this.modelUpdateForm.value);
      this.modelService.updateModel(modelModel).subscribe(
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
