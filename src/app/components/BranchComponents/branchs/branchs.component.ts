import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Branch } from '../../../models/branch';
import { BranchService } from '../../../services/branch.service';

@Component({
  selector: 'app-branchs',
  templateUrl: './branchs.component.html',
  styleUrls: ['./branchs.component.css'],
})
export class BranchsComponent implements OnInit {
  branchs: Branch[] = [];
  dataLoaded = false;
  constructor(
    private branchService: BranchService,
    activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getBranchs();
  }

  getBranchs() {
    this.branchService.getBranchs().subscribe((response) => {
      this.branchs = response.data;
      this.dataLoaded = true;
    });
  }
}
