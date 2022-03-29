import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperationClaim } from '../../../models/operationClaim';
import { OperationClaimService } from '../../../services/operation-claim.service';

@Component({
  selector: 'app-operationClaims',
  templateUrl: './operation-claims.component.html',
  styleUrls: ['./operation-claims.component.css'],
})
export class OperationClaimsComponent implements OnInit {
  operationClaims: OperationClaim[] = [];
  dataLoaded = false;
  constructor(
    private operationClaimService: OperationClaimService,
    activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getOperationClaims();
  }

  getOperationClaims() {
    this.operationClaimService.getOperationClaims().subscribe((response) => {
      this.operationClaims = response.data;
      this.dataLoaded = true;
    });
  }
}
