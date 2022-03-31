import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ModelService } from './../../../services/model.service';

@Component({
  selector: 'app-model-add',
  templateUrl: './model-add.component.html',
  styleUrls: ['./model-add.component.css'],
})
export class ModelAddComponent implements OnInit {
  modelAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private modelService: ModelService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createModelAddForm();
  }

  createModelAddForm() {
    this.modelAddForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  add() {
    if (this.modelAddForm.valid) {
      let modelModel = Object.assign({}, this.modelAddForm.value);
      this.modelService.addModel(modelModel).subscribe(
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
