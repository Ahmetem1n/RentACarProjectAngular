import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RentalDetailService } from './../../../services/rental-detail.service';

@Component({
  selector: 'app-rental-detail-update',
  templateUrl: './rental-detail-update.component.html',
  styleUrls: ['./rental-detail-update.component.css'],
})
export class RentalDetailUpdateComponent implements OnInit {
  rentalDetailUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private rentalDetailService: RentalDetailService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createRentalDetailUpdateForm();
  }

  createRentalDetailUpdateForm() {
    this.rentalDetailUpdateForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  update() {
    if (this.rentalDetailUpdateForm.valid) {
      let rentalDetailModel = Object.assign({}, this.rentalDetailUpdateForm.value);
      this.rentalDetailService.updateRentalDetail(rentalDetailModel).subscribe(
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
