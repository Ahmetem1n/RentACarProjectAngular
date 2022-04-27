import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardsFilter'
})
export class CardsFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
