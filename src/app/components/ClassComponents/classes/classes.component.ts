import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Class } from '../../../models/class';
import { ClassService } from '../../../services/class.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
  classes: Class[] = [];
  classAddForm: FormGroup;

  classUpdateAndDeleteForm: FormGroup;
  class: Class = { classId: 0, className: '' };

  classFilter = '';

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private classService: ClassService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getClasses();
    this.createClassAddForm();
    this.createClassUpdateAndDeleteForm();
  }

  getClasses() {
    this.classService.getClasses().subscribe((response) => {
      this.classes = response.data;
      this.dataLoaded = true;
    });
  }

  createClassDetail(classs: Class) {
    console.log(classs);
    this.classService.detailClass(classs.classId).subscribe((response) => {
      this.class = response.data;
      this.createClassUpdateAndDeleteForm();
    });
  }

  createClassUpdateAndDeleteForm() {
    this.classUpdateAndDeleteForm = this.formBuilder.group({
      classId: [this.class.classId, Validators.required],
      className: [this.class.className, Validators.required],
    });
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
    if (this.classUpdateAndDeleteForm.valid) {
      let classModel = Object.assign({}, this.classUpdateAndDeleteForm.value);
      this.classService.deleteClass(classModel).subscribe(
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
    if (this.classUpdateAndDeleteForm.valid) {
      let classModel = Object.assign({}, this.classUpdateAndDeleteForm.value);
      this.classService.updateClass(classModel).subscribe(
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
