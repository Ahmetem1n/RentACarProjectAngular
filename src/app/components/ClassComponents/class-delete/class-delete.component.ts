import { Class } from './../../../models/class';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClassService } from './../../../services/class.service';

@Component({
  selector: 'app-class-delete',
  templateUrl: './class-delete.component.html',
  styleUrls: ['./class-delete.component.css'],
})
export class ClassDeleteComponent implements OnInit {
  classDeleteForm: FormGroup;
  class: Class;
  constructor(
    private formBuilder: FormBuilder,
    private classService: ClassService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createClassDeleteForm();
  }

  createClassDeleteForm() {
    this.classDeleteForm = this.formBuilder.group({
      classId: [this.class.classId, Validators.required],
      className: [this.class.className, Validators.required],
    });
  }

  delete() {
    if (this.classDeleteForm.valid) {
      let classModel = Object.assign({}, this.classDeleteForm.value);
      this.classService.deleteClass(classModel).subscribe(
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
