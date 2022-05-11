import { User } from '../../../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user: User = {
    userId: null,
    firstName: null,
    birthYear: null,
    email: null,
    lastName: null,
    nationalityId: null,
    photo: null,
    status: null,
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['userId']) {
        console.log(params['userId']);
        this.userService.detailUser(params['userId']).subscribe((response) => {
          this.user = response.data;
          console.log(this.user);
        });
      }
    });
  }
}
