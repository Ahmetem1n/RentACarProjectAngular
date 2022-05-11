import { CaseTypeService } from './../../../../services/case-type.service';
import { FuelService } from './../../../../services/fuel.service';
import { BrandService } from './../../../../services/brand.service';
import { ColorService } from './../../../../services/color.service';
import { ClassService } from './../../../../services/class.service';
import { Gear } from './../../../../models/gear';
import { GearService } from './../../../../services/gear.service';
import { Branch } from './../../../../models/branch';
import { BranchService } from './../../../../services/branch.service';
import { CarDetailDto } from './../../../../models/carDetailDto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Car } from './../../../../models/car';
import { CarService } from 'src/app/services/car.service';
import { Component, OnInit } from '@angular/core';
import { countries } from './dataset';
import { Class } from 'src/app/models/class';

@Component({
  selector: 'app-get-by-usable',
  templateUrl: './get-by-usable.component.html',
  styleUrls: ['./get-by-usable.component.css'],
})
export class GetByUsableComponent implements OnInit {
  // countries: Record<string, string>[] = countries;
  // filteredCountries: Record<string, string>[] = [];

  carDetailDtos: CarDetailDto[] = [];

  getByUsable: FormGroup;

  branchs: Branch[] = [];
  brands = [{ name: 'Tümü', value: '' }];
  colors = [{ name: 'Tümü', value: '' }];
  gears = [{ name: 'Tümü', value: '' }];
  fuels = [{ name: 'Tümü', value: '' }];
  classes = [{ name: 'Tümü', value: '' }];
  caseTypes = [{ name: 'Tümü', value: '' }];
  YıldızSayısı = [{ name: 'Tümü', value: '' }];

  brandFilter = '';
  colorFilter = '';
  gearFilter = '';
  fuelFilter = '';
  classFilter = '';
  caseTypeFilter = '';

  constructor(
    private carService: CarService,
    private branchService: BranchService,
    private brandService: BrandService,
    private colorService: ColorService,
    private gearService: GearService,
    private fuelService: FuelService,
    private classService: ClassService,
    private caseTypeService: CaseTypeService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createCarAddForm();
    this.getBranchs();
    this.getBrands();
    this.getColors();
    this.getGears();
    this.getFuels();
    this.getClasses();
    this.getCaseTypes();
  }

  createCarAddForm() {
    this.getByUsable = this.formBuilder.group({
      rentDate: ['', Validators.required],
      returnDate: ['', Validators.required],
      branchId: ['', Validators.required],
    });
  }
  dataLoaded = false;

  getBranchs() {
    this.branchService.getBranchs().subscribe((response) => {
      this.branchs = response.data;
    });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      for (var i = 0; i < response.data.length; i++) {
        this.brands.push({
          name: response.data[i].brandName,
          value: response.data[i].brandName,
        });
      }
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      for (var i = 0; i < response.data.length; i++) {
        this.colors.push({
          name: response.data[i].colorName,
          value: response.data[i].colorName,
        });
      }
    });
  }

  getGears() {
    this.gearService.getGears().subscribe((response) => {
      for (var i = 0; i < response.data.length; i++) {
        this.gears.push({
          name: response.data[i].gearName,
          value: response.data[i].gearName,
        });
      }
    });
  }

  getFuels() {
    this.fuelService.getFuels().subscribe((response) => {
      for (var i = 0; i < response.data.length; i++) {
        this.fuels.push({
          name: response.data[i].fuelName,
          value: response.data[i].fuelName,
        });
      }
    });
  }

  getClasses() {
    this.classService.getClasses().subscribe((response) => {
      for (var i = 0; i < response.data.length; i++) {
        this.classes.push({
          name: response.data[i].className,
          value: response.data[i].className,
        });
      }
    });
  }

  getCaseTypes() {
    this.caseTypeService.getCaseTypes().subscribe((response) => {
      for (var i = 0; i < response.data.length; i++) {
        this.caseTypes.push({
          name: response.data[i].caseName,
          value: response.data[i].caseName,
        });
      }
    });
  }

  deneme() {
    if (this.getByUsable.valid) {
      let loginModel = Object.assign({}, this.getByUsable.value);
      this.carService
        .getByUsable(
          loginModel.rentDate,
          loginModel.returnDate,
          loginModel.branchId
        )
        .subscribe((response) => {
          this.carDetailDtos = response.data;
          this.dataLoaded = true;
        });
    } else {
      console.log('123');
    }
  }
}
