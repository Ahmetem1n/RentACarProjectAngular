import { Card } from './../../../models/card';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CardService } from './../../../services/card.service';

@Component({
  selector: 'app-card-delete',
  templateUrl: './card-delete.component.html',
  styleUrls: ['./card-delete.component.css'],
})
export class CardDeleteComponent implements OnInit {
  cardDeleteForm: FormGroup;
  card: Card;
  constructor(
    private formBuilder: FormBuilder,
    private cardService: CardService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createCardDeleteForm();
  }

  createCardDeleteForm() {
    this.cardDeleteForm = this.formBuilder.group({
      cardId: [this.card.cardId, Validators.required],
      userId: [this.card.userId, Validators.required],
      fullName: [this.card.fullName, Validators.required],
      cardNo: [this.card.cardNo, Validators.required],
      expiryDate: [this.card.expiryDate, Validators.required],
      cvv: [this.card.cvv, Validators.required],
    });
  }

  delete() {
    if (this.cardDeleteForm.valid) {
      let cardModel = Object.assign({}, this.cardDeleteForm.value);
      this.cardService.deleteCard(cardModel).subscribe(
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
