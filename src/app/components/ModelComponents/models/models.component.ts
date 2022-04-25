import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model } from '../../../models/model';
import { ModelService } from '../../../services/model.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css'],
})
export class ModelsComponent implements OnInit {
  models: Model[] = [];
  modelAddForm: FormGroup;

  modelUpdateAndDeleteForm: FormGroup;
  model: Model = { modelId: 0, modelName: '' };

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private modelService: ModelService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getModels();
    this.createModelAddForm();
    this.createModelUpdateAndDeleteForm();
  }

  getModels() {
    this.modelService.getModels().subscribe((response) => {
      this.models = response.data;
      this.dataLoaded = true;
    });
  }

  createModelDetail(model: Model) {
    console.log(model);
    this.modelService.detailModel(model.modelId).subscribe((response) => {
      this.model = response.data;
      this.createModelUpdateAndDeleteForm();
    });
  }

  createModelUpdateAndDeleteForm() {
    this.modelUpdateAndDeleteForm = this.formBuilder.group({
      modelId: [this.model.modelId, Validators.required],
      modelName: [this.model.modelName, Validators.required],
    });
  }

  createModelAddForm() {
    this.modelAddForm = this.formBuilder.group({
      modelName: ['', Validators.required],
    });
  }

  add() {
    if (this.modelAddForm.valid) {
      let modelModel = Object.assign({}, this.modelAddForm.value);
      this.modelService.addModel(modelModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Success');
          window.location.reload();
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

  delete() {
    if (this.modelUpdateAndDeleteForm.valid) {
      let modelModel = Object.assign({}, this.modelUpdateAndDeleteForm.value);
      this.modelService.deleteModel(modelModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Success');
          window.location.reload();
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

  update() {
    if (this.modelUpdateAndDeleteForm.valid) {
      let modelModel = Object.assign({}, this.modelUpdateAndDeleteForm.value);
      this.modelService.updateModel(modelModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Success');
          window.location.reload();
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
