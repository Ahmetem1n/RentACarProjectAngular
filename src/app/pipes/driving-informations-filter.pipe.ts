import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'drivingInformationsFilter'
})
export class DrivingInformationsFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
