import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrivingInformation } from '../../../models/drivingInformation';
import { DrivingInformationService } from '../../../services/driving-information.service';

@Component({
  selector: 'app-drivingInformations',
  templateUrl: './driving-informations.component.html',
  styleUrls: ['./driving-informations.component.css'],
})
export class DrivingInformationsComponent implements OnInit {
  drivingInformations: DrivingInformation[] = [];
  dataLoaded = false;
  constructor(
    private drivingInformationService: DrivingInformationService,
    activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getDrivingInformations();
  }

  getDrivingInformations() {
    this.drivingInformationService
      .getDrivingInformations()
      .subscribe((response) => {
        this.drivingInformations = response.data;
        this.dataLoaded = true;
      });
  }
}
