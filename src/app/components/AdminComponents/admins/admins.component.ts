import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Admin } from '../../../models/admin';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css'],
})
export class AdminsComponent implements OnInit {
  admins: Admin[] = [];
  dataLoaded = false;
  constructor(
    private adminService: AdminService,
    activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAdmins();
  }

  getAdmins() {
    this.adminService.getAdmins().subscribe((response) => {
      this.admins = response.data;
      this.dataLoaded = true;
    });
  }
}
