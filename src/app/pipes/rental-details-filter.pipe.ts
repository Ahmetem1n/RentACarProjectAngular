import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rentalDetailsFilter'
})
export class RentalDetailsFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
