import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FuelService } from './../../../services/fuel.service';

@Component({
  selector: 'app-fuel-update',
  templateUrl: './fuel-update.component.html',
  styleUrls: ['./fuel-update.component.css'],
})
export class FuelUpdateComponent implements OnInit {
  fuelUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private fuelService: FuelService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createFuelUpdateForm();
  }

  createFuelUpdateForm() {
    this.fuelUpdateForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  update() {
    if (this.fuelUpdateForm.valid) {
      let fuelModel = Object.assign({}, this.fuelUpdateForm.value);
      this.fuelService.updateFuel(fuelModel).subscribe(
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
