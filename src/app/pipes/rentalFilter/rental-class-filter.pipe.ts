import { CarDetailDto } from './../../models/carDetailDto';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rentalClassFilter'
})
export class RentalClassFilterPipe implements PipeTransform {

  transform(value: CarDetailDto[], carFilter: string): CarDetailDto[] {
    carFilter = carFilter ? carFilter.toLocaleLowerCase() : '';
    console.log(carFilter);
    return carFilter
      ? value.filter(
          (c: CarDetailDto) =>
            c.className.toLocaleLowerCase().indexOf(carFilter) !== -1
        )
      : value;
  }

}
