import { PhoneNumberService } from './../../../services/phone-number.service';
import { PhoneNumberDetailDto } from './../../../models/phoneNumberDetailDto';
import { DrivingInformationService } from './../../../services/driving-information.service';
import { DrivingInformation } from './../../../models/drivingInformation';
import { CityService } from './../../../services/city.service';
import { City } from './../../../models/city';
import { IdentityInformation } from './../../../models/identityInformation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDetailDto } from './../../../models/userDetailDto';
import { User } from './../../../models/user';
import { UserService } from './../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IdentityInformationService } from 'src/app/services/identity-information.service';
import { OperationClaimService } from 'src/app/services/operation-claim.service';
import { UserOperationClaimService } from 'src/app/services/user-operation-claim.service';
import { PhoneNumber } from 'src/app/models/phoneNumber';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailComponent implements OnInit {
  customer: UserDetailDto;
  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private identityInformationService: IdentityInformationService,
    private drivingInformationService: DrivingInformationService,
    private phoneNumberService: PhoneNumberService,
    private toastrService: ToastrService,
    private cityService: CityService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getCustomers();
    this.birthYearsCreate();
    this.getCities();
  }

  getCustomers() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['userId']) {
        this.userService.getByCustomers().subscribe((response) => {
          for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].userId == params['userId']) {
              this.customer = response.data[i];
              this.getIdentityInformation(params['userId']);
              this.createIdentityInformationForm(parseInt(params['userId']));

              this.getDrivingInformation(params['userId']);
              this.createDrivingInformationForm(parseInt(params['userId']));

              this.getPhoneNumbers(params['userId']);
              this.createPhoneNumberForm(parseInt(params['userId']));

              return;
            }
          }
          console.log('Seçilen Kullanıcı Müşteri Değil');
        });
      }
    });
  }

  genders = [{ gender: 'Erkek' }, { gender: 'Kadın' }, { gender: 'Diğer' }];
  maritalStatuses = [
    { maritalStatus: 'Evli' },
    { maritalStatus: 'Bekar' },
    { maritalStatus: 'Diğer' },
  ];

  birthYears = [1960];
  birthYearsCreate() {
    for (let i = 1961; i <= 2005; i++) {
      this.birthYears.push(i);
    }
  }

  bloodGroups = [
    { bloodGroup: 'A Rh+' },
    { bloodGroup: 'A Rh-' },
    { bloodGroup: 'B Rh+' },
    { bloodGroup: 'B Rh-' },
    { bloodGroup: 'AB Rh+' },
    { bloodGroup: 'AB Rh-' },
    { bloodGroup: '0 Rh+' },
    { bloodGroup: '0 Rh-' },
  ];

  cities: City[] = [];

  getCities() {
    this.cityService.getCities().subscribe((response) => {
      this.cities = response.data;
    });
  }

  //Identity Information
  identityInformation: IdentityInformation;
  getIdentityInformation(userId: number) {
    this.identityInformationService
      .getByUserId(userId)
      .subscribe((response) => {
        this.identityInformation = response.data;
        console.log(this.identityInformation);
        if (response.data) {
          this.updateIdentityInformationForm();
        }
      });
  }

  identityInformationForm: FormGroup;
  createIdentityInformationForm(userId: number) {
    this.identityInformationForm = this.formBuilder.group({
      userId: [userId, Validators.required],
      serialNumber: ['', Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      birthPlace: ['', Validators.required],
      birthYear: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      gender: ['', Validators.required],
      validUntil: ['', Validators.required],
    });
  }

  updateIdentityInformationForm() {
    this.identityInformationForm = this.formBuilder.group({
      identityId: [this.identityInformation.identityId, Validators.required],
      userId: [this.identityInformation.userId, Validators.required],
      serialNumber: [
        this.identityInformation.serialNumber,
        Validators.required,
      ],
      fatherName: [this.identityInformation.fatherName, Validators.required],
      motherName: [this.identityInformation.motherName, Validators.required],
      birthPlace: [this.identityInformation.birthPlace, Validators.required],
      birthYear: [this.identityInformation.birthYear, Validators.required],
      maritalStatus: [
        this.identityInformation.maritalStatus,
        Validators.required,
      ],
      gender: [this.identityInformation.gender, Validators.required],
      validUntil: [
        this.identityInformation.validUntil.toString().split('T')[0],
        Validators.required,
      ],
    });
  }

  updateIdentityInformation() {
    if (this.identityInformationForm.valid) {
      let identityInformationModel = Object.assign(
        {},
        this.identityInformationForm.value
      );
      if (this.identityInformation) {
        this.identityInformationService
          .updateIdentityInformation(identityInformationModel)
          .subscribe();
      } else {
        this.identityInformationService
          .addIdentityInformation(identityInformationModel)
          .subscribe();
      }
    } else {
      console.log('Form tamamlanmadı');
    }
  }

  deleteIdentityInformation() {
    if (this.identityInformation) {
      this.identityInformationService
        .deleteIdentityInformation(this.identityInformation)
        .subscribe();
    } else {
      console.log('Silinecek Bilgi Yok');
    }
  }

  //Driving Information
  drivingInformation: DrivingInformation;
  getDrivingInformation(userId: number) {
    this.drivingInformationService.getByUserId(userId).subscribe((response) => {
      this.drivingInformation = response.data;
      console.log(this.drivingInformation);
      if (response.data) {
        this.updateDrivingInformationForm();
      }
    });
  }

  drivingInformationForm: FormGroup;
  createDrivingInformationForm(userId: number) {
    this.drivingInformationForm = this.formBuilder.group({
      userId: [userId, Validators.required],
      licenceProvince: ['', Validators.required],
      licenceNumber: ['', Validators.required],
      expiryDate: ['', Validators.required],
      bloodGroup: ['', Validators.required],
    });
  }

  updateDrivingInformationForm() {
    this.drivingInformationForm = this.formBuilder.group({
      drivingId: [this.drivingInformation.drivingId, Validators.required],
      userId: [this.drivingInformation.userId, Validators.required],
      licenceProvince: [
        this.drivingInformation.licenceProvince,
        Validators.required,
      ],
      licenceNumber: [
        this.drivingInformation.licenceNumber,
        Validators.required,
      ],
      expiryDate: [
        this.drivingInformation.expiryDate.toString().split('T')[0],
        Validators.required,
      ],
      bloodGroup: [this.drivingInformation.bloodGroup, Validators.required],
    });
  }

  updateDrivingInformation() {
    console.log(this.drivingInformationForm)
    if (this.drivingInformationForm.valid) {
      let drivingInformationModel = Object.assign(
        {},
        this.drivingInformationForm.value
      );
      if (this.drivingInformation) {
        this.drivingInformationService
          .updateDrivingInformation(drivingInformationModel)
          .subscribe();
      } else {
        this.drivingInformationService
          .addDrivingInformation(drivingInformationModel)
          .subscribe();
      }
    } else {
      console.log('Form tamamlanmadı');
    }
  }

  deleteDrivingInformation() {
    if (this.drivingInformation) {
      this.drivingInformationService
        .deleteDrivingInformation(this.drivingInformation)
        .subscribe();
    } else {
      console.log('Silinecek Bilgi Yok');
    }
  }

  //Phone Numbers
  phoneNumbers: PhoneNumber[] = [];
  getPhoneNumbers(userId: number) {
    this.phoneNumberService
      .getByUserPhoneNumbers(userId)
      .subscribe((response) => {
        this.phoneNumbers = response.data;
      });
  }

  phoneNumberForm: FormGroup;
  createPhoneNumberForm(userId: number) {
    this.phoneNumberForm = this.formBuilder.group({
      userId: [userId, Validators.required],
      phoneNo: ['', Validators.required],
    });
  }

  deletePhoneNumber(phoneNumber: PhoneNumber) {
    this.phoneNumberService.deletePhoneNumber(phoneNumber).subscribe();
    window.location.reload();
  }

  addPhoneNumber() {
    if (this.phoneNumberForm.valid) {
      let phoneNumberForm = Object.assign(
        {},
        this.phoneNumberForm.value
      );
        this.phoneNumberService
          .addPhoneNumber(phoneNumberForm)
          .subscribe();
          window.location.reload();
      
    } else {
      console.log('Form tamamlanmadı');
    }
  }
}
