import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalDetail } from '../../../models/rentalDetail';
import { RentalDetailService } from '../../../services/rental-detail.service';

@Component({
  selector: 'app-rentalDetails',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.css'],
})
export class RentalDetailsComponent implements OnInit {
  rentalDetails: RentalDetail[] = [];
  dataLoaded = false;
  constructor(
    private rentalDetailService: RentalDetailService,
    activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRentalDetails();
  }

  getRentalDetails() {
    this.rentalDetailService.getRentalDetails().subscribe((response) => {
      this.rentalDetails = response.data;
      this.dataLoaded = true;
    });
  }
}
