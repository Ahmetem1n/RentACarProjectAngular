import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDto } from './../../models/carDetailDto';

@Pipe({
  name: 'rentalColorFilter',
})
export class RentalColorFilterPipe implements PipeTransform {
  transform(value: CarDetailDto[], carFilter: string): CarDetailDto[] {
    carFilter = carFilter ? carFilter.toLocaleLowerCase() : '';
    return carFilter
      ? value.filter(
          (c: CarDetailDto) =>
            c.colorName.toLocaleLowerCase().indexOf(carFilter) !== -1
        )
      : value;
  }
}
