import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CardService } from './../../../services/card.service';

@Component({
  selector: 'app-card-update',
  templateUrl: './card-update.component.html',
  styleUrls: ['./card-update.component.css'],
})
export class CardUpdateComponent implements OnInit {
  cardUpdateForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private cardService: CardService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createCardUpdateForm();
  }

  createCardUpdateForm() {
    this.cardUpdateForm = this.formBuilder.group({
      Id: ['', Validators.required],
    });
  }

  update() {
    if (this.cardUpdateForm.valid) {
      let cardModel = Object.assign({}, this.cardUpdateForm.value);
      this.cardService.updateCard(cardModel).subscribe(
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
