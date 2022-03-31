import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClassService } from './../../../services/class.service';

@Component({
  selector: 'app-class-update',
  templateUrl: './class-update.component.html',
  styleUrls: ['./class-update.component.css'],
})
export class ClassUpdateComponent implements OnInit {
  classUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private classService: ClassService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createClassUpdateForm();
  }

  createClassUpdateForm() {
    this.classUpdateForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  update() {
    if (this.classUpdateForm.valid) {
      let classModel = Object.assign({}, this.classUpdateForm.value);
      this.classService.updateClass(classModel).subscribe(
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
