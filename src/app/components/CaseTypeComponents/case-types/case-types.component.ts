import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CaseType } from '../../../models/caseType';
import { CaseTypeService } from '../../../services/case-type.service';

@Component({
  selector: 'app-caseTypes',
  templateUrl: './caseTypes.component.html',
  styleUrls: ['./caseTypes.component.css'],
})
export class CaseTypesComponent implements OnInit {
  caseTypes: CaseType[] = [];
  dataLoaded = false;
  constructor(
    private caseTypeService: CaseTypeService,
    activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCaseTypes();
  }

  getCaseTypes() {
    this.caseTypeService.getCaseTypes().subscribe((response) => {
      this.caseTypes = response.data;
      this.dataLoaded = true;
    });
  }
}
