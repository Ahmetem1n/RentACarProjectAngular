import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  isAdmin = false;
  isEmployee = false;
  isCustomer = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getRole();
  }

  getRole() {
    var result = this.authService.getRole();
    if (result == 'Yönetici') {
      this.isAdmin = true;
      this.isEmployee = false;
      this.isCustomer = false;
    } else if (result == 'Çalışan') {
      this.isAdmin = false;
      this.isEmployee = true;
      this.isCustomer = false;
    } else if (result == 'Müşteri') {
      this.isAdmin = false;
      this.isEmployee = false;
      this.isCustomer = true;
    }
  }
}
