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
  dataLoaded = false;
  constructor(
    private cardService: CardService,
    activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.cardService.getCards().subscribe((response) => {
      this.cards = response.data;
      this.dataLoaded = true;
    });
  }
}
