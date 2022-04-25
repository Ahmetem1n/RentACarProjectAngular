import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gear } from '../../../models/gear';
import { GearService } from '../../../services/gear.service';

@Component({
  selector: 'app-gears',
  templateUrl: './gears.component.html',
  styleUrls: ['./gears.component.css'],
})
export class GearsComponent implements OnInit {
  gears: Gear[] = [];
  gearAddForm: FormGroup;

  gearUpdateAndDeleteForm: FormGroup;
  gear: Gear = { gearId: 0, gearName: '' };

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private gearService: GearService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getGears();
    this.createGearAddForm();
    this.createGearUpdateAndDeleteForm();
  }

  getGears() {
    this.gearService.getGears().subscribe((response) => {
      this.gears = response.data;
      this.dataLoaded = true;
    });
  }

  createGearDetail(gear: Gear) {
    console.log(gear);
    this.gearService.detailGear(gear.gearId).subscribe((response) => {
      this.gear = response.data;
      this.createGearUpdateAndDeleteForm();
    });
  }

  createGearUpdateAndDeleteForm() {
    this.gearUpdateAndDeleteForm = this.formBuilder.group({
      gearId: [this.gear.gearId, Validators.required],
      gearName: [this.gear.gearName, Validators.required],
    });
  }

  createGearAddForm() {
    this.gearAddForm = this.formBuilder.group({
      gearName: ['', Validators.required],
    });
  }

  add() {
    if (this.gearAddForm.valid) {
      let gearModel = Object.assign({}, this.gearAddForm.value);
      this.gearService.addGear(gearModel).subscribe(
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
    if (this.gearUpdateAndDeleteForm.valid) {
      let gearModel = Object.assign({}, this.gearUpdateAndDeleteForm.value);
      this.gearService.deleteGear(gearModel).subscribe(
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
    if (this.gearUpdateAndDeleteForm.valid) {
      let gearModel = Object.assign({}, this.gearUpdateAndDeleteForm.value);
      this.gearService.updateGear(gearModel).subscribe(
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
