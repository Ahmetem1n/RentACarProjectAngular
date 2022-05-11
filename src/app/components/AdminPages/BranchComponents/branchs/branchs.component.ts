import { CityService } from '../../../../services/city.service';
import { City } from '../../../../models/city';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Branch } from '../../../../models/branch';
import { BranchService } from '../../../../services/branch.service';
import { BranchDetailDto } from 'src/app/models/branchDetailDto';

@Component({
  selector: 'app-branchs',
  templateUrl: './branchs.component.html',
  styleUrls: ['./branchs.component.css'],
})
export class BranchsComponent implements OnInit {
  branchDetailDtos: BranchDetailDto[] = [];
  branchAddForm: FormGroup;

  branchUpdateAndDeleteForm: FormGroup;
  branch: Branch = { branchId: 0, cityId: 0, branchName: '' };

  branchFilter = '';

  cities: City[] = [];
  filteredCities: Record<string, string>[] = []

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private branchService: BranchService,
    private cityService: CityService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getBranchDetailDtos();
    this.getCities();
    this.createBranchAddForm();
    this.createBranchUpdateAndDeleteForm();
  }

  getBranchDetailDtos() {
    this.branchService.getBranchDetailDtos().subscribe((response) => {
      this.branchDetailDtos = response.data;
      this.dataLoaded = true;
    });
  }

  getCities() {
    this.cityService.getCities().subscribe((response) => {
      this.cities = response.data;
    });
  }

  createBranchDetail(branchId: number) {
    this.branchService.detailBranch(branchId).subscribe((response) => {
      this.branch = response.data;
      this.createBranchUpdateAndDeleteForm();
    });
  }

  createBranchUpdateAndDeleteForm() {
    this.branchUpdateAndDeleteForm = this.formBuilder.group({
      branchId: [this.branch.branchId, Validators.required],
      cityId: [this.branch.cityId, Validators.required],
      branchName: [this.branch.branchName, Validators.required],
    });
  }

  createBranchAddForm() {
    this.branchAddForm = this.formBuilder.group({
      cityId: ['', Validators.required],
      branchName: ['', Validators.required],
    });
  }

  add() {
    if (this.branchAddForm.valid) {
      let branchModel = Object.assign({}, this.branchAddForm.value);
      this.branchService.addBranch(branchModel).subscribe(
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
    if (this.branchUpdateAndDeleteForm.valid) {
      let branchModel = Object.assign({}, this.branchUpdateAndDeleteForm.value);
      this.branchService.deleteBranch(branchModel).subscribe(
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
    if (this.branchUpdateAndDeleteForm.valid) {
      let branchModel = Object.assign({}, this.branchUpdateAndDeleteForm.value);
      this.branchService.updateBranch(branchModel).subscribe(
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
