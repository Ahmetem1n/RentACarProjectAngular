import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gear } from '../../../models/gear';
import { GearService } from '../../../services/gear.service';

@Component({
  selector: 'app-gears',
  templateUrl: './gears.component.html',
  styleUrls: ['./gears.component.css'],
})
export class GearsComponent implements OnInit {
  gears: Gear[] = [];
  dataLoaded = false;
  constructor(
    private gearService: GearService,
    activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getGears();
  }

  getGears() {
    this.gearService.getGears().subscribe((response) => {
      this.gears = response.data;
      this.dataLoaded = true;
    });
  }
}
