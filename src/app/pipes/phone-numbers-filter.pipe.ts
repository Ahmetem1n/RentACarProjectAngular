import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumbersFilter'
})
export class PhoneNumbersFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
