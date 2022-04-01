import { RentalDetail } from './../../../models/rentalDetail';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RentalDetailService } from './../../../services/rental-detail.service';

@Component({
  selector: 'app-rental-detail-delete',
  templateUrl: './rental-detail-delete.component.html',
  styleUrls: ['./rental-detail-delete.component.css'],
})
export class RentalDetailDeleteComponent implements OnInit {
  rentalDetailDeleteForm: FormGroup;
  rentalDetail: RentalDetail;
  constructor(
    private formBuilder: FormBuilder,
    private rentalDetailService: RentalDetailService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createRentalDetailDeleteForm();
  }

  createRentalDetailDeleteForm() {
    this.rentalDetailDeleteForm = this.formBuilder.group({
      rentalId: [this.rentalDetail.rentalId, Validators.required],
      userId: [this.rentalDetail.userId, Validators.required],
      carId: [this.rentalDetail.carId, Validators.required],
      rentDate: [this.rentalDetail.rentDate, Validators.required],
      returnDate: [this.rentalDetail.returnDate, Validators.required],
      firstMileage: [this.rentalDetail.firstMileage, Validators.required],
      lastMileage: [this.rentalDetail.lastMileage, Validators.required],
    });
  }

  delete() {
    if (this.rentalDetailDeleteForm.valid) {
      let rentalDetailModel = Object.assign(
        {},
        this.rentalDetailDeleteForm.value
      );
      this.rentalDetailService.deleteRentalDetail(rentalDetailModel).subscribe(
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
