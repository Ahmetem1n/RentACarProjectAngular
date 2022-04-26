import { ModelService } from './../../../services/model.service';
import { CaseTypeService } from './../../../services/case-type.service';
import { ClassService } from './../../../services/class.service';
import { FuelService } from './../../../services/fuel.service';
import { GearService } from './../../../services/gear.service';
import { BranchService } from './../../../services/branch.service';
import { ColorService } from './../../../services/color.service';
import { BrandService } from './../../../services/brand.service';
import { Model } from './../../../models/model';
import { CaseType } from './../../../models/caseType';
import { Class } from './../../../models/class';
import { Fuel } from './../../../models/fuel';
import { Gear } from './../../../models/gear';
import { Color } from './../../../models/color';
import { Branch } from './../../../models/branch';
import { Brand } from './../../../models/brand';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../../models/car';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];
  carAddForm: FormGroup;

  carUpdateAndDeleteForm: FormGroup;
  car: Car = {
    carId: 0,
    brandId: 0,
    colorId: 0,
    branchId: 0,
    gearId: 0,
    fuelId: 0,
    classId: 0,
    caseId: 0,
    modelId: 0,
    carPlate: '',
    carStar: 0,
    modelYear: 0,
    dailyPrice: 0,
    description: '',
    carUsable: false,
    carLocation: '',
  };

  brands: Brand[] = [];
  colors: Color[] = [];
  branchs: Branch[] = [];
  gears: Gear[] = [];
  fuels: Fuel[] = [];
  classes: Class[] = [];
  caseTypes: CaseType[] = [];
  models: Model[] = [];

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,
    private branchService: BranchService,
    private gearService: GearService,
    private fuelService: FuelService,
    private classService: ClassService,
    private caseTypeService: CaseTypeService,
    private modelService: ModelService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCars();
    this.getBrands();
    this.getColors();
    this.getBranchs();
    this.getGears();
    this.getFuels();
    this.getClasses();
    this.getCaseTypes();
    this.getModels();
    this.createCarAddForm();
    this.createCarUpdateAndDeleteForm();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getBrandName(brandId: number) {
    return this.brands.find((b) => b.brandId == brandId).brandName;
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }

  getColorName(colorId: number) {
    return this.colors.find((c) => c.colorId == colorId).colorName;
  }

  getBranchs() {
    this.branchService.getBranchs().subscribe((response) => {
      this.branchs = response.data;
    });
  }

  getBranchName(branchId: number) {
    return this.branchs.find((b) => b.branchId == branchId).branchName;
  }

  getGears() {
    this.gearService.getGears().subscribe((response) => {
      this.gears = response.data;
    });
  }

  getGearName(gearId: number) {
    return this.gears.find((g) => g.gearId == gearId).gearName;
  }

  getFuels() {
    this.fuelService.getFuels().subscribe((response) => {
      this.fuels = response.data;
    });
  }

  getFuelName(fuelId: number) {
    return this.fuels.find((f) => f.fuelId == fuelId).fuelName;
  }

  getClasses() {
    this.classService.getClasses().subscribe((response) => {
      this.classes = response.data;
    });
  }

  getClassName(classId: number) {
    return this.classes.find((c) => c.classId == classId).className;
  }

  getCaseTypes() {
    this.caseTypeService.getCaseTypes().subscribe((response) => {
      this.caseTypes = response.data;
    });
  }

  getCaseName(caseId: number) {
    return this.caseTypes.find((c) => c.caseId == caseId).caseName;
  }

  getModels() {
    this.modelService.getModels().subscribe((response) => {
      this.models = response.data;
    });
  }

  getModelName(modelId: number) {
    return this.models.find((m) => m.modelId == modelId).modelName;
  }

  createCarDetail(car: Car) {
    console.log(car);
    this.carService.detailCar(car.carId).subscribe((response) => {
      this.car = response.data;
      this.createCarUpdateAndDeleteForm();
    });
  }

  createCarUpdateAndDeleteForm() {
    this.carUpdateAndDeleteForm = this.formBuilder.group({
      carId: [this.car.carId, Validators.required],
      brandId: [this.car.brandId, Validators.required],
      colorId: [this.car.colorId, Validators.required],
      branchId: [this.car.branchId, Validators.required],
      gearId: [this.car.gearId, Validators.required],
      fuelId: [this.car.fuelId, Validators.required],
      classId: [this.car.classId, Validators.required],
      caseId: [this.car.caseId, Validators.required],
      modelId: [this.car.modelId, Validators.required],
      carPlate: [this.car.carPlate, Validators.required],
      carStar: [this.car.carStar, Validators.required],
      modelYear: [this.car.modelYear, Validators.required],
      dailyPrice: [this.car.dailyPrice, Validators.required],
      description: [this.car.description, Validators.required],
      carUsable: [this.car.carUsable, Validators.required],
      carLocation: [this.car.carLocation, Validators.required],
    });
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      branchId: ['', Validators.required],
      gearId: ['', Validators.required],
      fuelId: ['', Validators.required],
      classId: ['', Validators.required],
      caseId: ['', Validators.required],
      modelId: ['', Validators.required],
      carPlate: ['', Validators.required],
      carStar: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
      carUsable: ['', Validators.required],
      carLocation: ['', Validators.required],
    });
  }

  add() {
    if (this.carAddForm.valid) {
      let carModel = Object.assign({}, this.carAddForm.value);
      this.carService.addCar(carModel).subscribe(
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
    if (this.carUpdateAndDeleteForm.valid) {
      let carModel = Object.assign({}, this.carUpdateAndDeleteForm.value);
      this.carService.deleteCar(carModel).subscribe(
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
    if (this.carUpdateAndDeleteForm.valid) {
      let carModel = Object.assign({}, this.carUpdateAndDeleteForm.value);
      this.carService.updateCar(carModel).subscribe(
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
