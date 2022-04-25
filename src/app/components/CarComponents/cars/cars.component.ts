import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../../models/car';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];
  carAddForm: FormGroup;

  carUpdateAndDeleteForm: FormGroup;
  car: Car = {
    carId: 0,
    brandId: 0,
    colorId: 0,
    branchId: 0,
    gearId: 0,
    fuelId: 0,
    classId: 0,
    bodyId: 0,
    modelId: 0,
    carPlate: '',
    carStar: 0,
    modelYear: 0,
    dailyPrice: 0,
    description: '',
    carUsable: false,
    carLocation: '',
  };

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCars();
    this.createCarAddForm();
    this.createCarUpdateAndDeleteForm();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  createCarDetail(car: Car) {
    console.log(car);
    this.carService.detailCar(car.carId).subscribe((response) => {
      this.car = response.data;
      this.createCarUpdateAndDeleteForm();
    });
  }

  createCarUpdateAndDeleteForm() {
    this.carUpdateAndDeleteForm = this.formBuilder.group({
      carId: [this.car.carId, Validators.required],
      brandId: [this.car.brandId, Validators.required],
      colorId: [this.car.colorId, Validators.required],
      branchId: [this.car.branchId, Validators.required],
      gearId: [this.car.gearId, Validators.required],
      fuelId: [this.car.fuelId, Validators.required],
      classId: [this.car.classId, Validators.required],
      bodyId: [this.car.bodyId, Validators.required],
      modelId: [this.car.modelId, Validators.required],
      carPlate: [this.car.carPlate, Validators.required],
      carStar: [this.car.carStar, Validators.required],
      modelYear: [this.car.modelYear, Validators.required],
      dailyPrice: [this.car.dailyPrice, Validators.required],
      description: [this.car.description, Validators.required],
      carUsable: [this.car.carUsable, Validators.required],
      carLocation: [this.car.carLocation, Validators.required],
    });
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      branchId: ['', Validators.required],
      gearId: ['', Validators.required],
      fuelId: ['', Validators.required],
      classId: ['', Validators.required],
      bodyId: ['', Validators.required],
      modelId: ['', Validators.required],
      carPlate: ['', Validators.required],
      carStar: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
      carUsable: ['', Validators.required],
      carLocation: ['', Validators.required],
    });
  }

  add() {
    if (this.carAddForm.valid) {
      let carModel = Object.assign({}, this.carAddForm.value);
      this.carService.addCar(carModel).subscribe(
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
    if (this.carUpdateAndDeleteForm.valid) {
      let carModel = Object.assign({}, this.carUpdateAndDeleteForm.value);
      this.carService.deleteCar(carModel).subscribe(
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
    if (this.carUpdateAndDeleteForm.valid) {
      let carModel = Object.assign({}, this.carUpdateAndDeleteForm.value);
      this.carService.updateCar(carModel).subscribe(
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
