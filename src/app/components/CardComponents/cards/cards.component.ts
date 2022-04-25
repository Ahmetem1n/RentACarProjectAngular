import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../../../models/card';
import { CardService } from '../../../services/card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  cards: Card[] = [];
  cardAddForm: FormGroup;

  cardUpdateAndDeleteForm: FormGroup;
  card: Card = {
    cardId: 0,
    userId: 0,
    fullName: '',
    cardNo: 0,
    expiryDate: undefined,
    cvv: 0,
  };

  dataLoaded = false;
  constructor(
    private formBuilder: FormBuilder,
    private cardService: CardService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCards();
    this.createCardAddForm();
    this.createCardUpdateAndDeleteForm();
  }

  getCards() {
    this.cardService.getCards().subscribe((response) => {
      this.cards = response.data;
      this.dataLoaded = true;
    });
  }

  createCardDetail(card: Card) {
    console.log(card);
    this.cardService.detailCard(card.cardId).subscribe((response) => {
      this.card = response.data;
      this.createCardUpdateAndDeleteForm();
    });
  }

  createCardUpdateAndDeleteForm() {
    this.cardUpdateAndDeleteForm = this.formBuilder.group({
      cardId: [this.card.cardId, Validators.required],
      userId: [this.card.userId, Validators.required],
      fullName: [this.card.fullName, Validators.required],
      cardNo: [this.card.cardNo, Validators.required],
      expiryDate: [this.card.expiryDate, Validators.required],
      cvv: [this.card.cvv, Validators.required],
    });
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
    if (this.cardUpdateAndDeleteForm.valid) {
      let cardModel = Object.assign({}, this.cardUpdateAndDeleteForm.value);
      this.cardService.deleteCard(cardModel).subscribe(
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

  update() {
    if (this.cardUpdateAndDeleteForm.valid) {
      let cardModel = Object.assign({}, this.cardUpdateAndDeleteForm.value);
      this.cardService.updateCard(cardModel).subscribe(
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
