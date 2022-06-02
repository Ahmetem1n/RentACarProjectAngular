import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetailDto: CarDetailDto = {
    carId: null,
    branchId: null,
    brandName: null,
    colorName: null,
    branchName: null,
    gearName: null,
    fuelName: null,
    className: null,
    caseName: null,
    carPlate: null,
    carStar: null,
    modelYear: null,
    dailyPrice: null,
    description: null,
    carUsable: null,
    carLocation: null,
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.carService.getCarDetailDtos().subscribe((response) => {
          this.carDetailDto = response.data.find(
            (c) => c.carId == params['carId']
          );
        });
      }
    });
  }
}
