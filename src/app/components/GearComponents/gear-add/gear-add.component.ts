import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GearService } from './../../../services/gear.service';

@Component({
  selector: 'app-gear-add',
  templateUrl: './gear-add.component.html',
  styleUrls: ['./gear-add.component.css'],
})
export class GearAddComponent implements OnInit {
  gearAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private gearService: GearService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createGearAddForm();
  }

  createGearAddForm() {
    this.gearAddForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  add() {
    if (this.gearAddForm.valid) {
      let gearModel = Object.assign({}, this.gearAddForm.value);
      this.gearService.addGear(gearModel).subscribe(
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
