import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user: User;
  constructor(
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['userId']) {
        this.userService.detailUser(params['userId']).subscribe((response) => {
          this.user = response.data;
          if (!this.user) {
            this.toastrService.error('Böyle Bir Kullanıcı Bulunamadı.', 'Hata');
          }
        });
      }
    });
  }
}
