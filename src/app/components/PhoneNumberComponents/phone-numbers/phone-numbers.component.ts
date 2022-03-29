import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhoneNumber } from '../../../models/phoneNumber';
import { PhoneNumberService } from '../../../services/phone-number.service';

@Component({
  selector: 'app-phoneNumbers',
  templateUrl: './phone-numbers.component.html',
  styleUrls: ['./phone-numbers.component.css'],
})
export class PhoneNumbersComponent implements OnInit {
  phoneNumbers: PhoneNumber[] = [];
  dataLoaded = false;
  constructor(
    private phoneNumberService: PhoneNumberService,
    activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPhoneNumbers();
  }

  getPhoneNumbers() {
    this.phoneNumberService.getPhoneNumbers().subscribe((response) => {
      this.phoneNumbers = response.data;
      this.dataLoaded = true;
    });
  }
}
