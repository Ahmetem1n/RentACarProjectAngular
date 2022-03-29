import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserOperationClaim } from '../../../models/userOperationClaim';
import { UserOperationClaimService } from '../../../services/user-operation-claim.service';

@Component({
  selector: 'app-userOperationClaims',
  templateUrl: './user-operation-claims.component.html',
  styleUrls: ['./user-operation-claims.component.css'],
})
export class UserOperationClaimsComponent implements OnInit {
  userOperationClaims: UserOperationClaim[] = [];
  dataLoaded = false;
  constructor(
    private userOperationClaimService: UserOperationClaimService,
    activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUserOperationClaims();
  }

  getUserOperationClaims() {
    this.userOperationClaimService
      .getUserOperationClaims()
      .subscribe((response) => {
        this.userOperationClaims = response.data;
        this.dataLoaded = true;
      });
  }
}
