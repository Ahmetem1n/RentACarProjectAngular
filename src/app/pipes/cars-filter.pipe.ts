import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carsFilter'
})
export class CarsFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
