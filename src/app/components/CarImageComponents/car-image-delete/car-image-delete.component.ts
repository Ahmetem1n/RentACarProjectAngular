import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarImageService } from './../../../services/car-image.service';

@Component({
  selector: 'app-car-image-delete',
  templateUrl: './car-image-delete.component.html',
  styleUrls: ['./car-image-delete.component.css'],
})
export class CarImageDeleteComponent implements OnInit {
  carImageDeleteForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private carImageService: CarImageService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createCarImageDeleteForm();
  }

  createCarImageDeleteForm() {
    this.carImageDeleteForm = this.formBuilder.group({
      imageId: ['', Validators.required],
      carId: ['', Validators.required],
      imagePath: ['', Validators.required],
    });
  }

  delete() {
    if (this.carImageDeleteForm.valid) {
      let carImageModel = Object.assign({}, this.carImageDeleteForm.value);
      this.carImageService.deleteCarImage(carImageModel).subscribe(
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
