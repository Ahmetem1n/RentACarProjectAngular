import { Gear } from './../../../models/gear';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GearService } from './../../../services/gear.service';

@Component({
  selector: 'app-gear-delete',
  templateUrl: './gear-delete.component.html',
  styleUrls: ['./gear-delete.component.css'],
})
export class GearDeleteComponent implements OnInit {
  gearDeleteForm: FormGroup;
  gear: Gear;
  constructor(
    private formBuilder: FormBuilder,
    private gearService: GearService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createGearDeleteForm();
  }

  createGearDeleteForm() {
    this.gearDeleteForm = this.formBuilder.group({
      gearId: [this.gear.gearId, Validators.required],
      gearName: [this.gear.gearName, Validators.required],
    });
  }

  delete() {
    if (this.gearDeleteForm.valid) {
      let gearModel = Object.assign({}, this.gearDeleteForm.value);
      this.gearService.deleteGear(gearModel).subscribe(
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
