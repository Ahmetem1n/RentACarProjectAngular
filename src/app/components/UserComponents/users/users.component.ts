import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserDetailDto } from 'src/app/models/userDetailDto';
import { UserService } from 'src/app/services/user.service';
import { OperationClaim } from './../../../models/operationClaim';
import { UserOperationClaim } from './../../../models/userOperationClaim';
import { OperationClaimService } from './../../../services/operation-claim.service';
import { UserOperationClaimService } from './../../../services/user-operation-claim.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userDetailDtos: UserDetailDto[] = [];
  userAddForm: FormGroup;

  userUpdateAndDeleteForm: FormGroup;
  user: UserDetailDto = {
    userId: 0,
    firstName: '',
    lastName: '',
    nationalityId: '',
    birthYear: 0,
    email: '',
    photo: '',
    status: '',
    claimName:"",
    claimId:0,
  };

  statuses = ['Aktif', 'Pasif'];

  birthYears = [1960];
  birthYearsCreate() {
    for (let i = 1961; i <= 2005; i++) {
      this.birthYears.push(i);
    }
  }

  userFilter = '';

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private operationClaimService:OperationClaimService,
    private userOperationClaimService:UserOperationClaimService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUserDetailDtos();
    this.getClaims();
    this.birthYearsCreate();
    this.createUserAddForm();
    this.createUserUpdateAndDeleteForm();
  }

  getUserDetailDtos() {
    this.userService.getUserDetailDtos().subscribe((response) => {
      this.userDetailDtos = response.data;
      this.dataLoaded = true;
    });
  }

  claims:OperationClaim[]=[]
  getClaims() {
    this.operationClaimService.getOperationClaims().subscribe((response) => {
      this.claims = response.data;
    });
  }

  createUserDetail(userId: number) {
    this.userService.getByUserId(userId).subscribe((response) => {
      this.user = response.data;
      this.createUserUpdateAndDeleteForm();
    });
  }

  createUserUpdateAndDeleteForm() {
    this.userUpdateAndDeleteForm = this.formBuilder.group({
      userId: [this.user.userId, Validators.required],
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      nationalityId: [this.user.nationalityId, Validators.required],
      birthYear: [this.user.birthYear, Validators.required],
      email: [this.user.email, Validators.required],
      photo: [this.user.photo, Validators.required],
      status: [this.user.status, Validators.required],
      claimId: [this.user.claimId, Validators.required],
    });
  }

  createUserAddForm() {
    this.userAddForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nationalityId: ['', Validators.required],
      birthYear: ['', Validators.required],
      email: ['', Validators.required],
      photo: ['', Validators.required],
      status: ['', Validators.required],
      claimId:['', Validators.required],
    });
  }

  add() {
    if (this.userAddForm.valid) {
      let userModel = Object.assign({}, this.userAddForm.value);
      let userOperationClaim:UserOperationClaim
      this.userOperationClaimService.getUserOperationClaims().subscribe(response=>{
        userOperationClaim=response.data.find(u=>u.userId==userModel.userId);
      });
      console.log(userOperationClaim)
      userOperationClaim.claimId=userModel.claimId
      this.userOperationClaimService.updateUserOperationClaim(userOperationClaim).subscribe();
      this.userService.addUser(userModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Success');
          window.location.reload();
        },
        (responseError) => {
          if (
            responseError.error.ValidationErrors &&
            responseError.error.ValidationErrors.length > 0
          ) {
            for (
              let i = 0;
              i < responseError.error.ValidationErrors.length;
              i++
            ) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                'Validation Error'
              );
            }
          } else {
            this.toastrService.error(responseError.error.message, 'Error');
          }
        }
      );
    } else {
      this.toastrService.error('Form not completed', 'Warning');
    }
  }

  delete() {
    if (this.userUpdateAndDeleteForm.valid) {
      let userModel = Object.assign({}, this.userUpdateAndDeleteForm.value);
      this.userService.deleteUser(userModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Success');
          window.location.reload();
        },
        (responseError) => {
          if (
            responseError.error.ValidationErrors &&
            responseError.error.ValidationErrors.length > 0
          ) {
            for (
              let i = 0;
              i < responseError.error.ValidationErrors.length;
              i++
            ) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                'Validation Error'
              );
            }
          } else {
            this.toastrService.error(responseError.error.message, 'Error');
          }
        }
      );
    } else {
      this.toastrService.error('Form not completed', 'Warning');
    }
  }

  userOperationClaim:UserOperationClaim
  update() {
    if (this.userUpdateAndDeleteForm.valid) {
      let userModel = Object.assign({}, this.userUpdateAndDeleteForm.value);
      this.userOperationClaimService.getUserOperationClaims().subscribe(response=>{
        this.userOperationClaim=response.data.find(u=>u.userId==userModel.userId);
        this.userOperationClaim.claimId=userModel.claimId
        this.userOperationClaimService.updateUserOperationClaim(this.userOperationClaim).subscribe();
      });
        
      this.userService.updateUser(userModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Success');
          window.location.reload();
        },
        (responseError) => {
          if (
            responseError.error.ValidationErrors &&
            responseError.error.ValidationErrors.length > 0
          ) {
            for (
              let i = 0;
              i < responseError.error.ValidationErrors.length;
              i++
            ) {
              this.toastrService.error(
                responseError.error.ValidationErrors[i].ErrorMessage,
                'Validation Error'
              );
            }
          } else {
            this.toastrService.error(responseError.error.message, 'Error');
          }
        }
      );
    } else {
      this.toastrService.error('Form not completed', 'Warning');
    }
  }
}
