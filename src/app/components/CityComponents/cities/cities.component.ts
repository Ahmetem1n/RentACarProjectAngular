import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from '../../../models/city';
import { CityService } from '../../../services/city.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent implements OnInit {
  cities: City[] = [];
  dataLoaded = false;
  constructor(
    private cityService: CityService,
    activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCities();
  }

  getCities() {
    this.cityService.getCities().subscribe((response) => {
      this.cities = response.data;
      this.dataLoaded = true;
    });
  }
}
