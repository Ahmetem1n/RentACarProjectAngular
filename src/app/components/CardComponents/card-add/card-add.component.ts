import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CardService } from './../../../services/card.service';

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css'],
})
export class CardAddComponent implements OnInit {
  cardAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private cardService: CardService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createCardAddForm();
  }

  createCardAddForm() {
    this.cardAddForm = this.formBuilder.group({
      userId: ['', Validators.required],
      fullName: ['', Validators.required],
      cardNo: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvv: ['', Validators.required],
    });
  }

  add() {
    if (this.cardAddForm.valid) {
      let cardModel = Object.assign({}, this.cardAddForm.value);
      this.cardService.addCard(cardModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Success');
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
