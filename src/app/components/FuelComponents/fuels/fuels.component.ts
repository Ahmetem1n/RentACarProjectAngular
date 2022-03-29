import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fuel } from '../../../models/fuel';
import { FuelService } from '../../../services/fuel.service';

@Component({
  selector: 'app-fuels',
  templateUrl: './fuels.component.html',
  styleUrls: ['./fuels.component.css'],
})
export class FuelsComponent implements OnInit {
  fuels: Fuel[] = [];
  dataLoaded = false;
  constructor(
    private fuelService: FuelService,
    activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getFuels();
  }

  getFuels() {
    this.fuelService.getFuels().subscribe((response) => {
      this.fuels = response.data;
      this.dataLoaded = true;
    });
  }
}
