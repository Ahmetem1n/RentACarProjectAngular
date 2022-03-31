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
      cardId: ['', Validators.required],
      userId: ['', Validators.required],
      fullName: ['', Validators.required],
      cardNo: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvv: ['', Validators.required],
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
