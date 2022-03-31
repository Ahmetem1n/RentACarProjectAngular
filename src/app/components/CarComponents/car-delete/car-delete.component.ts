import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from './../../../services/car.service';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css'],
})
export class CarDeleteComponent implements OnInit {
  carDeleteForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createCarDeleteForm();
  }

  createCarDeleteForm() {
    this.carDeleteForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  delete() {
    if (this.carDeleteForm.valid) {
      let carModel = Object.assign({}, this.carDeleteForm.value);
      this.carService.deleteCar(carModel).subscribe(
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
