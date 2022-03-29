import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdentityInformation } from '../../../models/identityInformation';
import { IdentityInformationService } from '../../../services/identity-information.service';

@Component({
  selector: 'app-identityInformations',
  templateUrl: './identity-informations.component.html',
  styleUrls: ['./identity-informations.component.css'],
})
export class IdentityInformationsComponent implements OnInit {
  identityInformations: IdentityInformation[] = [];
  dataLoaded = false;
  constructor(
    private identityInformationService: IdentityInformationService,
    activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getIdentityInformations();
  }

  getIdentityInformations() {
    this.identityInformationService
      .getIdentityInformations()
      .subscribe((response) => {
        this.identityInformations = response.data;
        this.dataLoaded = true;
      });
  }
}
