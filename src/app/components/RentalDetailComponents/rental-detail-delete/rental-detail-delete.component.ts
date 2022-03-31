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
      detailId: ['', Validators.required],
      userId: ['', Validators.required],
      carId: ['', Validators.required],
      rentDate: ['', Validators.required],
      returnDate: ['', Validators.required],
      firstMileage: ['', Validators.required],
      lastMileage: ['', Validators.required],
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
