import { RentalDetail } from './../models/rentalDetail';
import { Pipe, PipeTransform } from '@angular/core';
import { RentalDetailDto } from '../models/rentalDetailDto';

@Pipe({
  name: 'rentalDetailsFilter',
})
export class RentalDetailsFilterPipe implements PipeTransform {
  transform(value: RentalDetailDto[], rentalDetailFilter: string): RentalDetailDto[] {
    rentalDetailFilter = rentalDetailFilter ? rentalDetailFilter.toLocaleLowerCase() : '';
    console.log(rentalDetailFilter);
    return rentalDetailFilter
      ? value.filter(
          (r: RentalDetailDto) =>
            r.nationalityId.toLocaleLowerCase().indexOf(rentalDetailFilter)!==-1||
            r.carPlate.toLocaleLowerCase().indexOf(rentalDetailFilter)!==-1||
            String(r.rentDate).toLocaleLowerCase().indexOf(rentalDetailFilter)!==-1||
            String(r.returnDate).toLocaleLowerCase().indexOf(rentalDetailFilter)!==-1||
            String(r.firstMileage).toLocaleLowerCase().indexOf(rentalDetailFilter) !== -1||
            String(r.lastMileage).toLocaleLowerCase().indexOf(rentalDetailFilter) !== -1
        )
      : value;
  }
}
