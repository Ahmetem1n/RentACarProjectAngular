import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FuelService } from './../../../services/fuel.service';

@Component({
  selector: 'app-fuel-delete',
  templateUrl: './fuel-delete.component.html',
  styleUrls: ['./fuel-delete.component.css'],
})
export class FuelDeleteComponent implements OnInit {
  fuelDeleteForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private fuelService: FuelService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createFuelDeleteForm();
  }

  createFuelDeleteForm() {
    this.fuelDeleteForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  delete() {
    if (this.fuelDeleteForm.valid) {
      let fuelModel = Object.assign({}, this.fuelDeleteForm.value);
      this.fuelService.deleteFuel(fuelModel).subscribe(
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
