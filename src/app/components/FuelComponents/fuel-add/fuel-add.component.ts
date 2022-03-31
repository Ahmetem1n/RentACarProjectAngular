import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FuelService } from './../../../services/fuel.service';

@Component({
  selector: 'app-fuel-add',
  templateUrl: './fuel-add.component.html',
  styleUrls: ['./fuel-add.component.css'],
})
export class FuelAddComponent implements OnInit {
  fuelAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private fuelService: FuelService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createFuelAddForm();
  }

  createFuelAddForm() {
    this.fuelAddForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  add() {
    if (this.fuelAddForm.valid) {
      let fuelModel = Object.assign({}, this.fuelAddForm.value);
      this.fuelService.addFuel(fuelModel).subscribe(
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
