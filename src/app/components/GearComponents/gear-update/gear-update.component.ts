import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GearService } from './../../../services/gear.service';

@Component({
  selector: 'app-gear-update',
  templateUrl: './gear-update.component.html',
  styleUrls: ['./gear-update.component.css'],
})
export class GearUpdateComponent implements OnInit {
  gearUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private gearService: GearService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createGearUpdateForm();
  }

  createGearUpdateForm() {
    this.gearUpdateForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  update() {
    if (this.gearUpdateForm.valid) {
      let gearModel = Object.assign({}, this.gearUpdateForm.value);
      this.gearService.updateGear(gearModel).subscribe(
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
