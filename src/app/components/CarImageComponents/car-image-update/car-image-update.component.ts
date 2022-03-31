import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarImageService } from './../../../services/car-image.service';

@Component({
  selector: 'app-car-image-update',
  templateUrl: './car-image-update.component.html',
  styleUrls: ['./car-image-update.component.css'],
})
export class CarImageUpdateComponent implements OnInit {
  carImageUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private carImageService: CarImageService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createCarImageUpdateForm();
  }

  createCarImageUpdateForm() {
    this.carImageUpdateForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  update() {
    if (this.carImageUpdateForm.valid) {
      let carImageModel = Object.assign({}, this.carImageUpdateForm.value);
      this.carImageService.updateCarImage(carImageModel).subscribe(
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
