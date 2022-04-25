import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalDetail } from '../../../models/rentalDetail';
import { RentalDetailService } from '../../../services/rental-detail.service';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.css'],
})
export class RentalDetailsComponent implements OnInit {
  rentalDetails: RentalDetail[] = [];
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

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private rentalDetailService: RentalDetailService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRentalDetails();
    this.createRentalDetailAddForm();
    this.createRentalDetailUpdateAndDeleteForm();
  }

  getRentalDetails() {
    this.rentalDetailService.getRentalDetails().subscribe((response) => {
      this.rentalDetails = response.data;
      this.dataLoaded = true;
    });
  }

  createRentalDetail(rentalDetail: RentalDetail) {
    console.log(rentalDetail);
    this.rentalDetailService
      .detailRentalDetail(rentalDetail.rentalId)
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
