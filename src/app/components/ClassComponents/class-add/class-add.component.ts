import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClassService } from './../../../services/class.service';

@Component({
  selector: 'app-class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.css'],
})
export class ClassAddComponent implements OnInit {
  classAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private classService: ClassService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createClassAddForm();
  }

  createClassAddForm() {
    this.classAddForm = this.formBuilder.group({
      className: ['', Validators.required],
    });
  }

  add() {
    if (this.classAddForm.valid) {
      let classModel = Object.assign({}, this.classAddForm.value);
      this.classService.addClass(classModel).subscribe(
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
