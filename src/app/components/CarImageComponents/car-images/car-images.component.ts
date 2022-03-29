import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from '../../../models/carImage';
import { CarImageService } from '../../../services/car-image.service';

@Component({
  selector: 'app-carImages',
  templateUrl: './carImages.component.html',
  styleUrls: ['./carImages.component.css'],
})
export class CarImagesComponent implements OnInit {
  carImages: CarImage[] = [];
  dataLoaded = false;
  constructor(
    private carImageService: CarImageService,
    activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCarImages();
  }

  getCarImages() {
    this.carImageService.getCarImages().subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
    });
  }
}
