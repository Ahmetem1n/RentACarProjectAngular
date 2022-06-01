import { Branch } from './../../../models/branch';
import { BranchService } from './../../../services/branch.service';
import { AuthService } from 'src/app/services/auth.service';
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

  rentalDetailUpdateAndDeleteForm: FormGroup;
  rentalDetail: RentalDetail = {
    rentalId: 0,
    userId: 0,
    carId: 0,
    branchId: 0,
    rentDate: undefined,
    returnDate: undefined,
    rentalPrice: 0,
  };

  cars: Car[] = [];
  branchs: Branch[] = [];

  rentalDetailFilter = '';

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private rentalDetailService: RentalDetailService,
    private userService: UserService,
    private authService: AuthService,
    private carService: CarService,
    private branchService: BranchService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRentalDetailDtos();
    this.getCustomers();
    this.getCars();
    this.getBranchs();
    this.createRentalDetailUpdateAndDeleteForm();
  }

  getRentalDetailDtos() {
    if (this.getRole() == 'Müşteri') {
      this.rentalDetailService
        .getRentalDetailDtosByUserId(this.authService.getCurrentUserId)
        .subscribe((response) => {
          this.rentalDetailDtos = response.data;
          this.dataLoaded = true;
        });
    } else {
      this.rentalDetailService.getRentalDetailDtos().subscribe((response) => {
        this.rentalDetailDtos = response.data;
        console.log(this.rentalDetailDtos)
        this.dataLoaded = true;
      });
    }
  }

  getRole() {
    return this.authService.getRole();
  }

  customers: User[] = [];
  getCustomers() {
    this.userService.getByCustomers().subscribe((response) => {
      this.customers = response.data;
    });
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }

  getBranchs() {
    this.branchService.getBranchs().subscribe((response) => {
      this.branchs = response.data;
    });
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
      branchId: [this.rentalDetail.branchId, Validators.required],
      rentDate: [this.rentalDetail.rentDate, Validators.required],
      returnDate: [this.rentalDetail.returnDate, Validators.required],
      rentalPrice: [this.rentalDetail.rentalPrice, Validators.required],
    });
    //console.log(this.rentalDetail.rentDate.toString().substring(0,10))
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
