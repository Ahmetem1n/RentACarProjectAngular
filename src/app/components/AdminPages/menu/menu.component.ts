import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  isAdmin = true;
  isEmployee = false;
  isCustomer = false;
  constructor() {}

  ngOnInit(): void {}

  roleNe() {
    var result = 'Admin';
    if (result == 'Admin') {
      this.isAdmin = true;
      this.isEmployee = false;
      this.isCustomer = false;
    } else if (result == 'Customer') {
      this.isAdmin = false;
      this.isEmployee = false;
      this.isCustomer = true;
    }
  }
}
