import { CarService } from './../../../services/car.service';
import { Car } from './../../../models/car';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from '../../../models/carImage';
import { CarImageService } from '../../../services/car-image.service';

@Component({
  selector: 'app-car-images',
  templateUrl: './car-images.component.html',
  styleUrls: ['./car-images.component.css'],
})
export class CarImagesComponent implements OnInit {
  carImages: CarImage[] = [];
  carImageAddForm: FormGroup;

  carImageUpdateAndDeleteForm: FormGroup;
  carImage: CarImage = { imageId: 0, carId: 0, imagePath: '' };

  cars: Car[] = [];

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private carImageService: CarImageService,
    private carService: CarService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCarImages();
    this.getCars();
    this.createCarImageAddForm();
    this.createCarImageUpdateAndDeleteForm();
  }

  getCarImages() {
    this.carImageService.getCarImages().subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarPlate(carId: number) {
    return this.cars.find((c) => c.carId == carId).carPlate;
  }

  createCarImageDetail(carImage: CarImage) {
    console.log(carImage);
    this.carImageService
      .detailCarImage(carImage.imageId)
      .subscribe((response) => {
        this.carImage = response.data;
        this.createCarImageUpdateAndDeleteForm();
      });
  }

  createCarImageUpdateAndDeleteForm() {
    this.carImageUpdateAndDeleteForm = this.formBuilder.group({
      carImageId: [this.carImage.imageId, Validators.required],
      carId: [this.carImage.carId, Validators.required],
      imagePath: [this.carImage.imagePath, Validators.required],
    });
  }

  createCarImageAddForm() {
    this.carImageAddForm = this.formBuilder.group({
      carId: ['', Validators.required],
      imagePath: ['', Validators.required],
    });
  }

  add() {
    if (this.carImageAddForm.valid) {
      let carImageModel = Object.assign({}, this.carImageAddForm.value);
      this.carImageService.addCarImage(carImageModel).subscribe(
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
    if (this.carImageUpdateAndDeleteForm.valid) {
      let carImageModel = Object.assign(
        {},
        this.carImageUpdateAndDeleteForm.value
      );
      this.carImageService.deleteCarImage(carImageModel).subscribe(
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
    if (this.carImageUpdateAndDeleteForm.valid) {
      let carImageModel = Object.assign(
        {},
        this.carImageUpdateAndDeleteForm.value
      );
      this.carImageService.updateCarImage(carImageModel).subscribe(
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
