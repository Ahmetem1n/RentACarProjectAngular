import { CarDetailDto } from './../../models/carDetailDto';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rentalCaseTypeFilter'
})
export class RentalCaseTypeFilterPipe implements PipeTransform {

  transform(value: CarDetailDto[], carFilter: string): CarDetailDto[] {
    carFilter = carFilter ? carFilter.toLocaleLowerCase() : '';
    console.log(carFilter);
    return carFilter
      ? value.filter(
          (c: CarDetailDto) =>
            c.caseName.toLocaleLowerCase().indexOf(carFilter) !== -1
        )
      : value;
  }

}
