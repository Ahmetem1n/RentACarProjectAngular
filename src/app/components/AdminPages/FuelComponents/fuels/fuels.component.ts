import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fuel } from '../../../../models/fuel';
import { FuelService } from '../../../../services/fuel.service';

@Component({
  selector: 'app-fuels',
  templateUrl: './fuels.component.html',
  styleUrls: ['./fuels.component.css'],
})
export class FuelsComponent implements OnInit {
  fuels: Fuel[] = [];
  fuelAddForm: FormGroup;

  fuelUpdateAndDeleteForm: FormGroup;
  fuel: Fuel = { fuelId: 0, fuelName: '' };

  fuelFilter = '';

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private fuelService: FuelService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getFuels();
    this.createFuelAddForm();
    this.createFuelUpdateAndDeleteForm();
  }

  getFuels() {
    this.fuelService.getFuels().subscribe((response) => {
      this.fuels = response.data;
      this.dataLoaded = true;
    });
  }

  createFuelDetail(fuel: Fuel) {
    console.log(fuel);
    this.fuelService.detailFuel(fuel.fuelId).subscribe((response) => {
      this.fuel = response.data;
      this.createFuelUpdateAndDeleteForm();
    });
  }

  createFuelUpdateAndDeleteForm() {
    this.fuelUpdateAndDeleteForm = this.formBuilder.group({
      fuelId: [this.fuel.fuelId, Validators.required],
      fuelName: [this.fuel.fuelName, Validators.required],
    });
  }

  createFuelAddForm() {
    this.fuelAddForm = this.formBuilder.group({
      fuelName: ['', Validators.required],
    });
  }

  add() {
    if (this.fuelAddForm.valid) {
      let fuelModel = Object.assign({}, this.fuelAddForm.value);
      this.fuelService.addFuel(fuelModel).subscribe(
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
    if (this.fuelUpdateAndDeleteForm.valid) {
      let fuelModel = Object.assign({}, this.fuelUpdateAndDeleteForm.value);
      this.fuelService.deleteFuel(fuelModel).subscribe(
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
    if (this.fuelUpdateAndDeleteForm.valid) {
      let fuelModel = Object.assign({}, this.fuelUpdateAndDeleteForm.value);
      this.fuelService.updateFuel(fuelModel).subscribe(
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
