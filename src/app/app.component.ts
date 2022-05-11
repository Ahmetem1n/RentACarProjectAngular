import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RentACarProjectAngular';

  isAdmin = false;
  isCustomer = false;
  isEmployee = false;

  ngOnInit(): void {
    this.getUserRole();
  }

  getUserRole() {
    this.isAdmin = true;
    this.isCustomer = false;
    this.isEmployee = false;
  }
}
