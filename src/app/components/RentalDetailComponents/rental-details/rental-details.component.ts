import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { RentalDetailDto } from 'src/app/models/rentalDetailDto';
import { User } from 'src/app/models/user';
import { CarService } from 'src/app/services/car.service';
import { RentalDetailService } from 'src/app/services/rental-detail.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.css'],
})
export class RentalDetailsComponent implements OnInit {
  rentalDetailDtos: RentalDetailDto[] = [];
  rentalDetailAddForm: FormGroup;

  rentalDetailUpdateAndDeleteForm: FormGroup;
  rentalDetail: RentalDetail = {
    rentalId: 0,
    userId: 0,
    carId: 0,
    rentDate: undefined,
    returnDate: undefined,
    firstMileage: 0,
    lastMileage: 0,
  };

  users: User[] = [];
  cars: Car[] = [];

  rentalDetailFilter = '';

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private rentalDetailService: RentalDetailService,
    private userService: UserService,
    private carService: CarService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRentalDetailDtos();
    this.getUsers();
    this.getCars();
    this.createRentalDetailAddForm();
    this.createRentalDetailUpdateAndDeleteForm();
  }

  getRentalDetailDtos() {
    this.rentalDetailService.getRentalDetailDtos().subscribe((response) => {
      this.rentalDetailDtos = response.data;
      this.dataLoaded = true;
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe((response) => {
      this.users = response.data;
    });
  }

  getUserNationalityId(userId: number) {
    return this.users.find((u) => u.userId == userId).nationalityId;
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getCarPlate(carId: number) {
    return this.cars.find((c) => c.carId == carId).carPlate;
  }

  createRentalDetail(rentalId: number) {
    this.rentalDetailService
      .detailRentalDetail(rentalId)
      .subscribe((response) => {
        this.rentalDetail = response.data;
        this.createRentalDetailUpdateAndDeleteForm();
      });
  }

  createRentalDetailUpdateAndDeleteForm() {
    
    this.rentalDetailUpdateAndDeleteForm = this.formBuilder.group({
      rentalId: [this.rentalDetail.rentalId, Validators.required],
      userId: [this.rentalDetail.userId, Validators.required],
      carId: [this.rentalDetail.carId, Validators.required],
      rentDate: [this.rentalDetail.rentDate, Validators.required],
      returnDate: [this.rentalDetail.returnDate, Validators.required],
      firstMileage: [this.rentalDetail.firstMileage, Validators.required],
      lastMileage: [this.rentalDetail.lastMileage, Validators.required],
    });
    //console.log(this.rentalDetail.rentDate.toString().substring(0,10))
  }

  createRentalDetailAddForm() {
    this.rentalDetailAddForm = this.formBuilder.group({
      userId: ['', Validators.required],
      carId: ['', Validators.required],
      rentDate: ['', Validators.required],
      returnDate: ['', Validators.required],
      firstMileage: ['', Validators.required],
      lastMileage: ['', Validators.required],
    });
  }

  add() {
    if (this.rentalDetailAddForm.valid) {
      let rentalDetailModel = Object.assign({}, this.rentalDetailAddForm.value);
      this.rentalDetailService.addRentalDetail(rentalDetailModel).subscribe(
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
    if (this.rentalDetailUpdateAndDeleteForm.valid) {
      let rentalDetailModel = Object.assign(
        {},
        this.rentalDetailUpdateAndDeleteForm.value
      );
      this.rentalDetailService.deleteRentalDetail(rentalDetailModel).subscribe(
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
    if (this.rentalDetailUpdateAndDeleteForm.valid) {
      let rentalDetailModel = Object.assign(
        {},
        this.rentalDetailUpdateAndDeleteForm.value
      );
      this.rentalDetailService.updateRentalDetail(rentalDetailModel).subscribe(
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
