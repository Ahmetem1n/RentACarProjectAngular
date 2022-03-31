import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from './../../../services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css'],
})
export class ColorUpdateComponent implements OnInit {
  colorUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private colorService: ColorService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createColorUpdateForm();
  }

  createColorUpdateForm() {
    this.colorUpdateForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  update() {
    if (this.colorUpdateForm.valid) {
      let colorModel = Object.assign({}, this.colorUpdateForm.value);
      this.colorService.updateColor(colorModel).subscribe(
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
