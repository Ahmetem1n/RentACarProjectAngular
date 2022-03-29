import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Model } from '../../../models/model';
import { ModelService } from '../../../services/model.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css'],
})
export class ModelsComponent implements OnInit {
  models: Model[] = [];
  dataLoaded = false;
  constructor(
    private modelService: ModelService,
    activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getModels();
  }

  getModels() {
    this.modelService.getModels().subscribe((response) => {
      this.models = response.data;
      this.dataLoaded = true;
    });
  }
}
